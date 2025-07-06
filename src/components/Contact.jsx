import React from 'react'

const Contact = () => {
  const contactLinks = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      href: 'mailto:dasun.theekshana.git@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: '+94 70 364 1467',
      href: 'tel:+94703641467'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/94703641467'
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      href: 'https://github.com/dasuntheekshanagit'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/dasun-theekshana-806643156'
    },
    {
      icon: 'fas fa-code',
      label: 'LeetCode',
      href: 'https://leetcode.com/u/mrdfox/'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to bring your ideas to life</p>
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <h3>"Innovation thrives on out-of-the-box thinking and relentless motivation."</h3>
            <p>
              I am Dasun Theekshana, a Computer Engineering undergraduate specializing in full stack 
              web development, network security engineering, and machine learning. My passion for 
              solving complex problems drives my innovative approach to technology.
            </p>
            <a 
              href="https://drive.google.com/file/d/1R2S_viqB4guPU98I-srLrvAr9TavcW-X/view?usp=drive_link" 
              className="btn btn-primary" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
          
          <div className="contact-methods">
            {/* Traditional Contact Links */}
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="contact-link"
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* SimplexChat QR Code Section */}
            <div className="simplex-chat-section" style={{
              background: 'var(--dark-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius)',
              padding: '30px',
              textAlign: 'center',
              marginTop: '30px'
            }}>
              <h4 style={{
                color: 'var(--light-text)',
                marginBottom: '15px',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                <i className="fas fa-shield-alt" style={{ 
                  color: 'var(--primary-color)', 
                  marginRight: '10px' 
                }}></i>
                Private & Secure Messaging
              </h4>
              
              <p style={{
                color: 'var(--gray-text)',
                marginBottom: '20px',
                fontSize: '0.95rem',
                lineHeight: '1.6'
              }}>
                Connect with me securely via SimplexChat - a private messenger without user IDs
              </p>

              {/* QR Code Container */}
              <div className="qr-code-container" style={{
                background: 'white',
                padding: '20px',
                borderRadius: 'var(--border-radius-sm)',
                display: 'inline-block',
                marginBottom: '20px',
                border: '2px solid var(--border-color)'
              }}>
                {/* Placeholder QR Code - In real implementation, this would be generated */}
                <div style={{
                  width: '150px',
                  height: '150px',
                  background: `
                    repeating-linear-gradient(
                      0deg,
                      #000 0px,
                      #000 3px,
                      #fff 3px,
                      #fff 6px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      #000 0px,
                      #000 3px,
                      #fff 3px,
                      #fff 6px
                    )
                  `,
                  backgroundBlendMode: 'multiply',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    background: 'white',
                    padding: '10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center',
                    border: '1px solid #000'
                  }}>
                    SimplexChat<br/>QR Code
                  </div>
                </div>
              </div>

              <div className="simplex-instructions" style={{
                fontSize: '0.9rem',
                color: 'var(--gray-text)',
                lineHeight: '1.5'
              }}>
                <p style={{ marginBottom: '10px' }}>
                  <strong style={{ color: 'var(--primary-color)' }}>How to connect:</strong>
                </p>
                <ol style={{ 
                  textAlign: 'left', 
                  paddingLeft: '20px',
                  marginBottom: '15px'
                }}>
                  <li>Download SimplexChat app</li>
                  <li>Tap "Connect" button</li>
                  <li>Scan this QR code</li>
                  <li>Start secure messaging!</li>
                </ol>
                
                <div className="simplex-links" style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <a 
                    href="https://simplex.chat/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--primary-gradient)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      transition: 'var(--transition)'
                    }}
                  >
                    <i className="fas fa-download" style={{ marginRight: '5px' }}></i>
                    Get SimplexChat
                  </a>
                  
                  <a 
                    href="https://simplex.chat/docs/guide/readme.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--dark-surface)',
                      color: 'var(--gray-text)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      border: '1px solid var(--border-color)',
                      transition: 'var(--transition)'
                    }}
                  >
                    <i className="fas fa-info-circle" style={{ marginRight: '5px' }}></i>
                    Learn More
                  </a>
                </div>
              </div>

              <div style={{
                marginTop: '15px',
                padding: '10px',
                background: 'var(--dark-surface)',
                borderRadius: 'var(--border-radius-sm)',
                fontSize: '0.8rem',
                color: 'var(--gray-text)'
              }}>
                <i className="fas fa-lock" style={{ 
                  color: 'var(--success-color)', 
                  marginRight: '5px' 
                }}></i>
                End-to-end encrypted • No phone numbers • No user IDs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

