import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getAllAchievements, getAchievementsByCategory } from '../data/achievementsData'

const AllAchievementsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const allAchievements = getAllAchievements()
  
  const categories = ['All', 'Competition', 'Hackathon', 'Programming Competition', 'Academic', 'Professional', 'Robotics Competition']
  
  const filteredAchievements = selectedCategory === 'All' 
    ? allAchievements 
    : getAchievementsByCategory(selectedCategory)

  const scrollToSection = () => {} // Placeholder for navigation

  return (
    <div className="AllAchievementsPage">
      <Navigation activeSection="achievements" scrollToSection={scrollToSection} />
      
      <section className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">All Achievements</h1>
            <p className="section-subtitle">Recognition for innovation, excellence, and dedication to technology</p>
          </div>
        </div>
      </section>

      <section className="achievements-content" style={{ padding: '60px 0' }}>
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter" style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="filter-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: selectedCategory === category ? '2px solid var(--primary-color)' : '2px solid var(--border-color)',
                    background: selectedCategory === category ? 'var(--primary-gradient)' : 'var(--dark-card)',
                    color: 'var(--light-text)',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    fontWeight: '600'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Timeline */}
          <div className="achievements-timeline" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {filteredAchievements.map((achievement, index) => (
              <div key={index} className="timeline-achievement" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
                gap: '40px',
                marginBottom: '60px',
                alignItems: 'start'
              }}>
                {/* Achievement Card */}
                <div className="achievement-card-detailed" style={{
                  background: 'var(--dark-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  padding: '30px',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  <div className="achievement-icon" style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--warning-gradient)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <i className={achievement.icon} style={{ fontSize: '2rem', color: 'white' }}></i>
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    marginBottom: '10px',
                    background: 'var(--warning-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {achievement.place}
                  </h3>
                  
                  <p style={{
                    color: 'var(--primary-color)',
                    fontWeight: '600',
                    marginBottom: '5px'
                  }}>
                    {achievement.year}
                  </p>
                  
                  <span style={{
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {achievement.category}
                  </span>
                </div>

                {/* Achievement Details */}
                <div className="achievement-details">
                  <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: 'var(--light-text)',
                    marginBottom: '15px'
                  }}>
                    {achievement.title}
                  </h2>
                  
                  <p style={{
                    color: 'var(--gray-text)',
                    lineHeight: '1.7',
                    fontSize: '1.1rem',
                    marginBottom: '20px'
                  }}>
                    {achievement.description}
                  </p>

                  {/* Full Description */}
                  <div style={{
                    background: 'var(--dark-surface)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    padding: '25px',
                    marginBottom: '20px'
                  }}>
                    <h4 style={{ color: 'var(--light-text)', marginBottom: '15px', fontSize: '1.2rem' }}>
                      Details
                    </h4>
                    <div style={{ color: 'var(--gray-text)', lineHeight: '1.7' }}>
                      {achievement.fullDescription.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} style={{ marginBottom: '15px' }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Skills & Impact */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1rem' }}>
                        Skills Demonstrated
                      </h5>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {achievement.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} style={{
                            background: 'var(--success-gradient)',
                            color: 'white',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1rem' }}>
                        Impact
                      </h5>
                      <p style={{ color: 'var(--gray-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {achievement.impact}
                      </p>
                    </div>
                  </div>

                  {/* Related Project Link */}
                  {achievement.relatedProject && (
                    <div style={{ marginTop: '20px' }}>
                      <Link 
                        to={`/project/${achievement.relatedProject}`}
                        className="btn btn-secondary"
                        style={{ fontSize: '0.9rem', padding: '10px 20px' }}
                      >
                        <i className="fas fa-project-diagram"></i>
                        View Related Project
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredAchievements.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h3 style={{ color: 'var(--gray-text)', marginBottom: '20px' }}>No achievements found in this category</h3>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="btn btn-primary"
              >
                View All Achievements
              </button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AllAchievementsPage

