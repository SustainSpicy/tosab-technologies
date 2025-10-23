import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { sendContactEmail } from '../services/emailService'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    company: '',
    role: '',
    projectTitle: '',
    projectBudget: '',
    projectDescription: ''
  })

  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     // Check file size for EmailJS (max 500KB for reliable sending)
  //     if (file.size > 500 * 1024) {
  //       setErrors(prev => ({ 
  //         ...prev, 
  //         file: 'File size must be less than 500KB for email attachment. Please compress your file or use a cloud sharing link in the description.' 
  //       }))
  //       return
  //     }
  //     setUploadedFile(file)
  //     setErrors(prev => ({ ...prev, file: '' }))
  //   }
  // }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required'
    if (!formData.role) newErrors.role = 'Role is required'
    if (!formData.projectTitle.trim()) newErrors.projectTitle = 'Project title is required'
    if (!formData.projectBudget) newErrors.projectBudget = 'Project budget is required'
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })
      
      // Add file if uploaded
      if (uploadedFile) {
        formDataToSend.append('attachment', uploadedFile)
      }

      // Send email using EmailJS
      await sendContactEmail(formData, uploadedFile || undefined)
      
      setSubmitStatus('success')
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        company: '',
        role: '',
        projectTitle: '',
        projectBudget: '',
        projectDescription: ''
      })
      setUploadedFile(null)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="w-full  pt-6 px-6 lg:px-20" style={{ backgroundColor: '#F8F9A' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-xl lg:text-2xl mb-8" style={{ color: '#454545' }}>
                Let's Discuss Your Opportunity
              </h1>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
              <div className="relative">
                <img
                  src="/support.png"
                  alt="Customer support representative ready to help with your project"
                  className="w-4 sm:w-20 lg:w-36 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Tell Us About Yourself */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-8" style={{ color: '#2E75B5' }}>
                Tell Us About Yourself
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#454545' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Type First Name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm  mb-2" style={{ color: '#454545' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Type Last Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#454545' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm  mb-2" style={{ color: '#454545' }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Type Mobile Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm  mb-2" style={{ color: '#454545' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Type Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#454545' }}>
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Type Role</option>
                    <option value="CEO">CEO</option>
                    <option value="CTO">CTO</option>
                    <option value="IT Manager">IT Manager</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Developer">Developer</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tell Us About Your Project */}
            <div>
              <h2 className="text-2xl lg:text-3xl mb-8" style={{ color: '#2E75B5' }}>
                Tell us About Your Project
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Title */}
                <div>
                  <label className="block text-sm  mb-2" style={{ color: '#454545' }}>
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    placeholder="Type Project title"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Project Budget */}
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#454545' }}>
                    Project Budget
                  </label>
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Budget Range</option>
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="Over $100,000">Over $100,000</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="mt-6">
                <label className="block text-sm  mb-2" style={{ color: '#454545' }}>
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  placeholder="Type Project Description"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Attach File */}
              {/* <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <label className="text-sm font-medium cursor-pointer" style={{ color: '#2E75B5' }}>
                    {uploadedFile ? uploadedFile.name : 'Attach File'}
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.png,.jpeg"
                      onChange={handleFileChange}
                    />
                  </label>
                  {uploadedFile && (
                    <button
                      type="button"
                      onClick={() => setUploadedFile(null)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      title="Remove file"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1">{errors.file}</p>
                )}
                {uploadedFile && (
                  <div className="mt-2 space-y-1">
                    <div className="text-sm" style={{ color: '#6B7280' }}>
                      File size: {(uploadedFile.size / 1024).toFixed(1)} KB
                    </div>
                    {uploadedFile.size > 500 * 1024 && (
                      <div className="text-xs" style={{ color: '#D97706' }}>
                        ⚠️ Large files cannot be attached via email. File details will be mentioned in the message.
                      </div>
                    )}
                  </div>
                )}
                <div className="mt-2 text-xs" style={{ color: '#9CA3AF' }}>
                  For files larger than 500KB, please share a cloud link (Google Drive, Dropbox) in the project description.
                </div>
              </div> */}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center pt-8">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-12 py-4 rounded-lg font-semibold text-lg transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                style={{
                  backgroundColor: '#E3AF59',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'
                  }
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Submit Now!'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full " style={{ backgroundColor: '#F8F9FA' }}>


        {/* Map Image */}
        <div className="relative overflow-hidden">
          <img
            src="/map.png"
            alt="Map showing Tosab Technologies office location in Abuja, Nigeria"
            className="w-full h-auto object-cover"
          />

          {/* Location Info Overlay */}
          <div className="absolute top-6 left-6 bg-white rounded-lg p-6 shadow-lg max-w-sm">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#454545' }}>
              Our Office Location
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#454545' }}>
                    3 Abubakar Koko Crescent
                  </p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Asokoro, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#454545' }}>
                    +234 703 131 97
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#454545' }}>
                    info@tosabtechnologies.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Contact Information Cards */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Hours */}
            <div className="text-center p-8 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <svg className="w-8 h-8" style={{ color: '#2E75B5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#454545' }}>
                Office Hours
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            {/* Response Time */}
            <div className="text-center p-8 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
                <svg className="w-8 h-8" style={{ color: '#E3AF59' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#454545' }}>
                Response Time
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                We typically respond to inquiries<br />
                within 24 hours during<br />
                business days
              </p>
            </div>

            {/* Emergency Support */}
            <div className="text-center p-8 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF2F2' }}>
                <svg className="w-8 h-8" style={{ color: '#DC2626' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#454545' }}>
                Emergency Support
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                For urgent technical issues<br />
                with existing projects,<br />
                call our emergency line
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage
