import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getProjectById } from '../data/projectsData'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const project = getProjectById(id)
  
  const scrollToSection = () => {} // Placeholder for navigation

  if (!project) {
    return (
      <div className="ProjectDetailPage">
        <Navigation activeSection="" scrollToSection={scrollToSection} />
        <section style={{ paddingTop: '120px', paddingBottom: '60px', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ color: 'var(--light-text)', marginBottom: '20px' }}>Project Not Found</h1>
            <p style={{ color: 'var(--gray-text)', marginBottom: '30px' }}>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              <i className="fas fa-arrow-left"></i>
              Back to Projects
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="ProjectDetailPage">
      <Navigation activeSection="" scrollToSection={scrollToSection} />
      
      {/* Project Header */}
      <section className="project-header" style={{ 
        paddingTop: '120px', 
        paddingBottom: '60px', 
        background: 'var(--dark-surface)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div className="project-breadcrumb" style={{ marginBottom: '30px' }}>
            <Link to="/" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'var(--gray-text)', margin: '0 10px' }}>/</span>
            <Link to="/projects" style={{ color: 'var(--gray-text)', textDecoration: 'none' }}>Projects</Link>
            <span style={{ color: 'var(--gray-text)', margin: '0 10px' }}>/</span>
            <span style={{ color: 'var(--primary-color)' }}>{project.title}</span>
          </div>
          
          <div className="project-header-content" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }}>
            <div>
              <h1 className="project-title" style={{ 
                fontSize: 'clamp(2rem, 4vw, 3rem)', 
                fontWeight: '800', 
                marginBottom: '20px',
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {project.title}
              </h1>
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'var(--gray-text)', 
                lineHeight: '1.7',
                marginBottom: '30px'
              }}>
                {project.shortDescription}
              </p>
              
              <div className="project-tags" style={{ marginBottom: '30px' }}>
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag" style={{ marginRight: '10px', marginBottom: '10px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {project.links.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                )}
                {project.links.video && (
                  <a 
                    href={project.links.video} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary"
                  >
                    <i className="fas fa-play"></i>
                    Watch Video
                  </a>
                )}
              </div>
            </div>

            <div className="project-meta-card" style={{
              background: 'var(--dark-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '30px'
            }}>
              <h3 style={{ color: 'var(--light-text)', marginBottom: '20px', fontSize: '1.3rem' }}>Project Details</h3>
              
              <div className="meta-item" style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Category:</strong>
                <span style={{ color: 'var(--gray-text)', marginLeft: '10px' }}>{project.category}</span>
              </div>
              
              <div className="meta-item" style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Status:</strong>
                <span style={{ 
                  color: 'white',
                  marginLeft: '10px',
                  background: project.status === 'Completed' ? 'var(--success-gradient)' : 'var(--warning-gradient)',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {project.status}
                </span>
              </div>
              
              <div className="meta-item" style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Duration:</strong>
                <span style={{ color: 'var(--gray-text)', marginLeft: '10px' }}>{project.duration}</span>
              </div>
              
              <div className="meta-item" style={{ marginBottom: '15px' }}>
                <strong style={{ color: 'var(--primary-color)' }}>Team Size:</strong>
                <span style={{ color: 'var(--gray-text)', marginLeft: '10px' }}>{project.teamSize}</span>
              </div>
              
              <div className="meta-item">
                <strong style={{ color: 'var(--primary-color)' }}>My Role:</strong>
                <span style={{ color: 'var(--gray-text)', marginLeft: '10px' }}>{project.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="project-content" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Description */}
            <div className="content-section" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                color: 'var(--light-text)', 
                marginBottom: '30px',
                fontSize: '2rem',
                fontWeight: '700'
              }}>
                Project Overview
              </h2>
              <div style={{ 
                color: 'var(--gray-text)', 
                lineHeight: '1.8',
                fontSize: '1.1rem'
              }}>
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '20px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="content-section" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                color: 'var(--light-text)', 
                marginBottom: '30px',
                fontSize: '2rem',
                fontWeight: '700'
              }}>
                Technologies Used
              </h2>
              <div className="tech-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                gap: '15px' 
              }}>
                {project.technologies.map((tech, index) => (
                  <div key={index} style={{
                    background: 'var(--dark-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    padding: '15px',
                    textAlign: 'center',
                    color: 'var(--light-text)',
                    fontWeight: '600',
                    transition: 'var(--transition)'
                  }}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="content-section" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                color: 'var(--light-text)', 
                marginBottom: '30px',
                fontSize: '2rem',
                fontWeight: '700'
              }}>
                Key Challenges
              </h2>
              <div className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <div key={index} style={{
                    background: 'var(--dark-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    padding: '20px',
                    marginBottom: '15px',
                    borderLeft: '4px solid var(--primary-color)'
                  }}>
                    <p style={{ color: 'var(--gray-text)', lineHeight: '1.6', margin: 0 }}>
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="content-section" style={{ marginBottom: '60px' }}>
              <h2 style={{ 
                color: 'var(--light-text)', 
                marginBottom: '30px',
                fontSize: '2rem',
                fontWeight: '700'
              }}>
                Key Achievements
              </h2>
              <div className="achievements-list">
                {project.achievements.map((achievement, index) => (
                  <div key={index} style={{
                    background: 'var(--dark-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    padding: '20px',
                    marginBottom: '15px',
                    borderLeft: '4px solid var(--success-color)'
                  }}>
                    <p style={{ color: 'var(--gray-text)', lineHeight: '1.6', margin: 0 }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--success-color)', marginRight: '10px' }}></i>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Link to="/projects" className="btn btn-primary" style={{ marginRight: '15px' }}>
                <i className="fas fa-arrow-left"></i>
                Back to Projects
              </Link>
              <Link to="/" className="btn btn-secondary">
                <i className="fas fa-home"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProjectDetailPage

