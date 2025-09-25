import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const BlogPage: React.FC = () => {
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
          <div className="flex justify-center ">
            <img
              src="/no-content.png"
              alt="No content available icon"
              className="w-32 h-32 object-contain opacity-80"
            />
          </div>

          {/* No Content Message */}
          <h2 className="text-2xl lg:text-3xl mb-6" style={{ color: '#6B7280' }}>
            No news at the moment!
          </h2>
          
          <p className="text-lg mb-8" style={{ color: '#9CA3AF' }}>
            We're working on bringing you valuable insights and updates. 
            Check back soon for expert articles on cloud computing, DevOps, 
            digital transformation, and technology trends.
          </p>

          {/* Call to Action */}
          {/* <div className="space-y-4">
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
          </div> */}
        </div>
      </section>

   

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default BlogPage
