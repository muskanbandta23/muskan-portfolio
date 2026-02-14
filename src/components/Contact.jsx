import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiUser, FiMessageSquare, FiMapPin, FiArrowRight } from 'react-icons/fi'

const Contact = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    emailjs.sendForm(
      'service_portfolio',
      'template_contact',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    )
      .then(() => {
        setSent(true)
        setSending(false)
        formRef.current.reset()
        setTimeout(() => setSent(false), 5000)
      })
      .catch(() => {
        setError('Failed to send message. Please try emailing directly.')
        setSending(false)
      })
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-tagline">Have something in mind?</p>
          <h2 className="contact-title">Let's Build Something<br /><span className="contact-title-accent">Amazing Together</span></h2>
          <p className="contact-desc">
            Whether it's a project, collaboration, or just a friendly hello — my inbox is always open.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FiMail size={22} />
              </div>
              <div>
                <h4>Drop an Email</h4>
                <a href="mailto:muskanbandta1@gmail.com">muskanbandta1@gmail.com</a>
              </div>
              <FiArrowRight className="contact-info-arrow" size={16} />
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FiUser size={22} />
              </div>
              <div>
                <h4>Connect on LinkedIn</h4>
                <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/muskan-bandta2004
                </a>
              </div>
              <FiArrowRight className="contact-info-arrow" size={16} />
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4>Based in</h4>
                <span>India</span>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-heading">Send me a message</h3>
            <div className="form-group">
              <label htmlFor="user_name">
                <FiUser size={16} />
                Name
              </label>
              <input type="text" id="user_name" name="user_name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">
                <FiMail size={16} />
                Email
              </label>
              <input type="email" id="user_email" name="user_email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <FiMessageSquare size={16} />
                Message
              </label>
              <textarea id="message" name="message" required rows="5" placeholder="Tell me about your idea..."></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={sending}>
              {sending ? 'Sending...' : sent ? 'Message Sent!' : <>Send Message <FiSend size={16} /></>}
            </button>
            {error && <p className="form-error">{error}</p>}
            {sent && <p className="form-success">Thank you! Your message has been sent successfully.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
