import emailjs from '@emailjs/browser'

// EmailJS configuration - Replace with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export const sendContactEmail = async (formData: any, file?: File): Promise<void> => {
  try {
    // Convert file to base64 if uploaded and size is acceptable
    let fileAttachment = ''
    let fileName = ''
    let fileInfo = ''
    
    if (file) {
      // Only attach files smaller than 500KB to avoid EmailJS payload limits
      if (file.size <= 500 * 1024) {
        fileAttachment = await convertFileToBase64(file)
        fileName = file.name
        fileInfo = `File attached: ${file.name} (${(file.size / 1024).toFixed(1)}KB)`
      } else {
        fileInfo = `Large file mentioned: ${file.name} (${(file.size / 1024 / 1024).toFixed(1)}MB) - File too large for email attachment`
      }
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.mobileNumber,
      company: formData.company || 'Not specified',
      role: formData.role,
      project_title: formData.projectTitle,
      project_budget: formData.projectBudget,
      message: formData.projectDescription,
      file_attachment: fileAttachment,
      file_name: fileName,
      file_info: fileInfo,
      to_email: 'info@tosabtechnologies.com',
      reply_to: formData.email
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )

    console.log('Email sent successfully:', response)
    
    if (response.status !== 200) {
      throw new Error('Email service returned error status')
    }
    
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email. Please try again or contact us directly.')
  }
}

// Convert file to base64 for EmailJS attachment
export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const result = reader.result as string
      // Remove data:image/jpeg;base64, or similar prefix
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = error => reject(error)
  })
}
