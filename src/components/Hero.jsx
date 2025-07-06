import React from 'react'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Dasun Theekshana</span>
            </h1>
            <p className="hero-subtitle">Computer Engineer & Full Stack Developer</p>
            <p className="hero-description">
              Passionate about creating innovative solutions through cutting-edge technology. 
              Specializing in full-stack development, machine learning, and embedded systems.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-code"></i>
                <span>Full Stack</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-brain"></i>
                <span>AI/ML</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-microchip"></i>
                <span>IoT</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-microchip"></i>
                <span>CI/CD</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="card-content">
                <i className="fas fa-microchip"></i>
                <span>AWS</span>
              </div>
            </div><div className="floating-card">
              <div className="card-content">
                <i className="fas fa-microchip"></i>
                <span>Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-animation"></div>
    </section>
  )
}

export default Hero

