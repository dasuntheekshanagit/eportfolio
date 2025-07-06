import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Freelancer',
      company: 'Fiverr / Truelancer / Freelancer',
      date: '2020 - Present',
      description: 'Specializing in full-stack web design (MEAN Stack, LAMP Stack, Django), Python projects, and React projects, delivering high-quality solutions to clients.',
      type: 'description'
    },
    {
      title: 'Casual Instructor',
      company: 'University of Peradeniya',
      date: 'Jan 2023 - Present',
      description: [
        'CO224-2023: Computer Architecture | March 2024 - Present',
        'CO223-2022: Computer Communication Networks I | Oct 2023 - Feb 2024',
        'GP106-2023: Computing | Jan 2023 - June 2023'
      ],
      type: 'list'
    },
    {
      title: 'Web Editor',
      company: 'IESL Student Chapter, University of Peradeniya',
      date: 'Mar 2023 - Present',
      description: 'Managing Facebook page, creating engaging content, overseeing marketing and branding efforts, and managing the chapter\'s website.',
      type: 'description'
    },
    {
      title: 'Editor',
      company: 'Inventor Club - University of Peradeniya',
      date: 'Feb 2023 - Present',
      description: 'Responsible for managing the Facebook page, creating and posting engaging content, overseeing marketing and branding efforts.',
      type: 'description'
    },
    {
      title: 'Member of the Web Consultation team',
      company: 'University of Peradeniya',
      date: '2023 - Present',
      description: 'Contributing to web development and consultation projects within the university.',
      type: 'description'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and growth</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                {exp.type === 'list' ? (
                  <ul className="timeline-list">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="timeline-description">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

