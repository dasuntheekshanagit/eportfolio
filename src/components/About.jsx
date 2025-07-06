import React from 'react'

const About = () => {
  const skills = [
    { icon: 'fab fa-js-square', name: 'JavaScript' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fas fa-database', name: 'Databases' },
    { icon: 'fab fa-aws', name: 'Cloud' },
    { icon: 'fas fa-robot', name: 'Machine Learning' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Crafting digital experiences with passion and precision</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Engineering undergraduate at the University of Peradeniya with a passion for 
              innovation and problem-solving. My journey in technology spans full-stack web development, 
              machine learning, and embedded systems.
            </p>
            <p>
              Currently working as a Casual Instructor at the University of Peradeniya and freelancing 
              on various platforms, I bring both academic knowledge and practical experience to every project.
            </p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

