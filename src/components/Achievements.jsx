import React from 'react'

const Achievements = () => {
  const achievements = [
    {
      place: '3rd Place',
      title: 'IEEE Innovation Nation Sri Lanka',
      year: '2023 - Central Province',
      description: 'Designed an AR first-person shooter game integrating guns and stationary devices, showcasing innovative use of augmented reality technology.',
      icon: 'fas fa-trophy'
    },
    {
      place: 'Winners',
      title: 'ACES Hackathon',
      year: '2023',
      description: 'Developed \'Zero Cost NotePad,\' leveraging image processing and machine learning, to create innovative notes with a pen on reusable surfaces.',
      icon: 'fas fa-medal'
    },
    {
      place: '9th Place',
      title: 'ACES Coders v10.0',
      year: '2023',
      description: 'Inter-university 12-hour overnight coding competition (Out of 150+ participants) organized by the University of Peradeniya.',
      icon: 'fas fa-award'
    },
    {
      place: '12th Place',
      title: 'ACES Coders v9.0',
      year: '2022',
      description: 'Inter-university 12-hour overnight coding competition (Out of 150+ participants) organized by the University of Peradeniya.',
      icon: 'fas fa-code'
    },
    {
      place: 'Finalists',
      title: 'IEEE Innovation Nation Sri Lanka',
      year: '2022 - Central Province',
      description: 'Created a smart bus ticket system enabling passengers to reserve seats, track bus locations, and notify drivers of their desired exit points.',
      icon: 'fas fa-bus'
    },
    {
      place: 'Most Popular Robot Award',
      title: 'IESL RAS Robot Competition',
      year: '2021',
      description: 'Awarded Most Popular Robot at IESL RAS Robot Competition for designing and implementing a line-following robot using Webots ROS2 software.',
      icon: 'fas fa-robot'
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognition for innovation and excellence</p>
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
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
      </div>
    </section>
  )
}

export default Achievements

