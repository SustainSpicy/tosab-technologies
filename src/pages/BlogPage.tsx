import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div style={{ background: `linear-gradient(to bottom right, #2E75B5, #1E5A8A, #454545)` }}>
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#454545' }}>
                Our Blog
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  Welcome to the Tosab Technologies Blog, your hub for expert insights, industry trends, and practical 
                  advice on cloud computing, DevOps, software development, digital transformation, and emerging 
                  tech in Africa and beyond. Stay informed with thought leadership, case studies, and tech tips 
                  designed to help your business grow smarter and scale faster in the digital era.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/blog.png"
                  alt="Connected devices and technology network representing our blog content"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Content Section */}
      <section className="w-full py-32 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* No Content Icon */}
          <div className="flex justify-center mb-8">
            <img
              src="/no-content.png"
              alt="No content available icon"
              className="w-32 h-32 object-contain opacity-80"
            />
          </div>

          {/* No Content Message */}
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6" style={{ color: '#6B7280' }}>
            No news at the moment!
          </h2>
          
          <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
            We're working on bringing you valuable insights and updates. 
            Check back soon for expert articles on cloud computing, DevOps, 
            digital transformation, and technology trends.
          </p>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-base" style={{ color: '#6B7280' }}>
              Want to be notified when we publish new content?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <button
                className="px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                style={{
                  backgroundColor: '#2E75B5',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E5A8A'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E75B5'}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8" style={{ color: '#454545' }}>
            Coming Soon to Our Blog
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#E3F2FD' }}>
                <svg className="w-6 h-6" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#454545' }}>
                Industry Insights
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Deep dives into technology trends across African markets
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
                <svg className="w-6 h-6" style={{ color: '#E3AF59' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#454545' }}>
                Technical Tutorials
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Step-by-step guides for cloud migration and DevOps implementation
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: '#F3E5F5' }}>
                <svg className="w-6 h-6" style={{ color: '#9C27B0' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#454545' }}>
                Success Stories
              </h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Real client transformations and lessons learned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Have a Topic Suggestion?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            We'd love to hear what technology topics interest you most. 
            Reach out and let us know what you'd like to learn about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: '#E3AF59',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
            >
              Suggest a Topic
            </button>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                border: '2px solid #FFFFFF',
                backgroundColor: 'transparent',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = '#FFFFFF'
                target.style.color = '#2E75B5'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = 'transparent'
                target.style.color = '#FFFFFF'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default BlogPage
