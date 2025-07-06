import React from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedAchievements } from '../data/achievementsData'

const FeaturedAchievements = () => {
  const featuredAchievements = getFeaturedAchievements()

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Achievements</h2>
          <p className="section-subtitle">Recognition for innovation and excellence</p>
        </div>
        <div className="achievements-grid">
          {featuredAchievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <div className="achievement-content">
                <h3>{achievement.place}</h3>
                <p className="achievement-title">{achievement.title}</p>
                <p className="achievement-year">{achievement.year}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/achievements" className="btn btn-primary">
            <i className="fas fa-trophy"></i>
            View All Achievements
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedAchievements

