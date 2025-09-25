import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your backend API here
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl  mb-8" style={{ color: '#454545' }}>
                Let's Discuss Your Opportunity
              </h1>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/support.png"
                  alt="Customer support representative ready to help with your project"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
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
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <label className="text-sm  cursor-pointer" style={{ color: '#2E75B5' }}>
                    Attach File
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.png,.jpeg"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="px-12 py-4 rounded-lg text-lg transition-colors"
                style={{
                  backgroundColor: '#E3AF59',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
              >
                Submit Now!
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
