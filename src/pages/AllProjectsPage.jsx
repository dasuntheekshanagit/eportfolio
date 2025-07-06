import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { getAllProjects, getProjectsByCategory } from '../data/projectsData'

const AllProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const allProjects = getAllProjects()
  
  const categories = ['All', 'AR/VR', 'Mobile Development', 'Web Development', 'Hardware/IoT', 'AI/ML', 'Robotics']
  
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : getProjectsByCategory(selectedCategory)

  const scrollToSection = () => {} // Placeholder for navigation

  return (
    <div className="AllProjectsPage">
      <Navigation activeSection="projects" scrollToSection={scrollToSection} />
      
      <section className="page-header" style={{ paddingTop: '120px', paddingBottom: '60px', background: 'var(--dark-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">All Projects</h1>
            <p className="section-subtitle">Comprehensive portfolio of innovative solutions and technical achievements</p>
          </div>
        </div>
      </section>

      <section className="projects-content" style={{ padding: '60px 0' }}>
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

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.id}`} 
                        className="project-link"
                      >
                        <i className="fas fa-info-circle"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-meta" style={{ marginBottom: '10px' }}>
                    <span className="project-category" style={{
                      background: 'var(--accent-gradient)',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {project.category}
                    </span>
                    <span className="project-status" style={{
                      background: project.status === 'Completed' ? 'var(--success-gradient)' : 'var(--warning-gradient)',
                      color: 'white',
                      padding: '4px 12px',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginLeft: '10px'
                    }}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag">+{project.tags.length - 3} more</span>
                    )}
                  </div>
                  <div className="project-footer" style={{ marginTop: '20px' }}>
                    <Link 
                      to={`/project/${project.id}`} 
                      className="btn btn-secondary"
                      style={{ fontSize: '0.9rem', padding: '10px 20px' }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h3 style={{ color: 'var(--gray-text)', marginBottom: '20px' }}>No projects found in this category</h3>
              <button 
                onClick={() => setSelectedCategory('All')}
                className="btn btn-primary"
              >
                View All Projects
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

export default AllProjectsPage

