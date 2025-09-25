import React from 'react'
import { teamMembers } from '../data/teamData'

const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl  mb-6" style={{ color: '#454545' }}>
            Meet Our Team Of Creators, Designers,
          </h2>
          <h2 className="text-3xl lg:text-4xl  mb-6" style={{ color: '#454545' }}>
            Developers, and World-Class Problem Solvers
          </h2>
          <div className="mt-8">
            <p className="text-lg mb-2" style={{ color: '#2E75B5' }}>
              The minds behind the mission.
            </p>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Tech builders, problem solvers, and bold thinkers shaping
            </p>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Africa's digital future. One solution at a time.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
            >
              {/* Team Member Image */}
              <div className="relative mb-6">
                {member.name === "Position Available" ? (
                  // Placeholder for available positions
                  <div 
                    className="w-48 h-64 rounded-lg flex items-center justify-center border-2 border-dashed"
                    style={{ 
                      borderColor: '#2E75B5',
                      backgroundColor: '#F8F9FA'
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: '#2E75B5' }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium" style={{ color: '#2E75B5' }}>
                        Join Our Team
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-lg">
                    {/* Regular image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-64 h-64 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Colored image (appears on hover) */}
                    {member.coloredImage && (
                      <img
                        src={member.coloredImage}
                        alt={`${member.name} colored`}
                        className="absolute inset-0 w-64 h-64 object-cover rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Team Member Info */}
              <div className="space-y-2">
                <h3 
                  className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300"
                  style={{ color: member.name === "Position Available" ? '#6B7280' : '#2E75B5' }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: '#454545' }}>
                  {member.title}
                </p>
                <p className="text-xs" style={{ color: '#6B7280' }}>
                  {member.company}
                </p>
                {member.bio && (
                  <p className="text-sm mt-3 max-w-xs" style={{ color: '#6B7280' }}>
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Action Button for Available Positions */}
              {/* {member.name === "Position Available" && (
                <button
                  className="mt-4 px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  style={{
                    backgroundColor: '#E3AF59',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
                >
                  Apply Now
                </button>
              )} */}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamSection
