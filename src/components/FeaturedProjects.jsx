import React from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projectsData'

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Innovative solutions that make a difference</p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
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
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-footer" style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link to="/projects" className="btn btn-primary">
            <i className="fas fa-folder-open"></i>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

