import React from 'react'
import { projects } from '../data/projectsData'

const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Main Content - White Background */}
      <div className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#454545' }}>
              Our Recent Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.title}
                className="text-center group cursor-pointer"
              >
                {/* Project Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-64 h-64 object-contain"
                      style={{ maxWidth: '256px', maxHeight: '256px' }}
                    />
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl  mb-3 transition-colors duration-300 group-hover:text-blue-600" 
                    style={{ color: '#454545' }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                {project.description && (
                  <p className="text-sm leading-relaxed mb-3 max-w-xs mx-auto" style={{ color: '#6B7280' }}>
                    {project.description}
                  </p>
                )}

                {/* Project Category */}
                {project.category && (
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" 
                        style={{ backgroundColor: '#E3AF59', color: '#FFFFFF' }}>
                    {project.category}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Get in Touch Button */}
          <div className="text-center">
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#E3AF59' }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Blue Footer Bar */}
      <div className="w-full h-16" style={{ backgroundColor: '#2E75B5' }}>
        {/* Empty blue bar as shown in the design */}
      </div>
    </section>
  )
}

export default ProjectsSection
