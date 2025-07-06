import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'ARCombat | First-Person AR Game',
      description: 'Groundbreaking first-person AR game integrating VR and AR technologies for immersive multiplayer experiences with custom 3D printed hardware.',
      tags: ['Embedded Systems', 'IoT', 'Augmented Reality'],
      links: {
        demo: 'https://cepdnaclk.github.io/e19-3yp-First-Person-AR-Game-with-Localization/',
        github: 'https://github.com/cepdnaclk/e19-3yp-First-Person-AR-Game-with-Localization'
      }
    },
    {
      title: 'Baby Development Tracking System',
      description: 'Comprehensive system to track developmental milestones of infants with AI chatbot "Nanny" for guidance and support to caregivers.',
      tags: ['Java', 'Firebase', 'Mobile App'],
      links: {
        demo: 'https://cepdnaclk.github.io/e19-co225-Baby-Developement-Tracking-System-Mobileapplication/',
        github: 'https://github.com/cepdnaclk/e19-co225-Baby-Developement-Tracking-System-Mobileapplication'
      }
    },
    {
      title: 'Keyboard for the Visually Impaired',
      description: 'Innovative keyboard using Braille patterns with auditory feedback, supporting 50+ characters and wireless connectivity for enhanced accessibility.',
      tags: ['IoT', 'C Programming', 'Accessibility'],
      links: {
        demo: 'https://cepdnaclk.github.io/e19-co227-Keyboard-for-Visually-Impaired/',
        github: 'https://github.com/cepdnaclk/e19-co227-Keyboard-for-Visually-Impaired'
      }
    },
    {
      title: 'ESCAL Website',
      description: 'Contributed to developing the new website for the Embedded Systems and Computer Architecture Laboratory (ESCAL) using Jekyll and GitHub Pages.',
      tags: ['Jekyll', 'Web Development'],
      links: {
        demo: 'http://escal.ce.pdn.ac.lk/',
        github: 'https://github.com/cepdnaclk/escal-new'
      }
    },
    {
      title: 'Python Based Text Adventure Game',
      description: 'Developed \'Quest for the Hidden Ticket,\' a web-based game utilizing Linux terminal commands for newcomers in the Department of Computer Engineering.',
      tags: ['Full-Stack Development', 'Flask'],
      links: {
        github: 'https://github.com/dasuntheekshanagit/e20welcome'
      }
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Innovative solutions that make a difference</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
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
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

