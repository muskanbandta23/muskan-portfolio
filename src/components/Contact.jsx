import { useState } from 'react'
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    const formData = new FormData(e.target)
    formData.append('access_key', '9853f041-9306-473a-b74d-15aedc2a0401')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        e.target.reset()
        setTimeout(() => setSent(false), 5000)
      } else {
        setError('Failed to send. Please try emailing directly.')
      }
    } catch {
      setError('Failed to send. Please try emailing directly.')
    }
    setSending(false)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-tagline">Got a Cool Idea?</p>
          <h2 className="contact-title">Let's Make It<br /><span className="contact-title-accent">Happen</span></h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <a href="mailto:muskanbandta1@gmail.com" className="contact-info-item">
              <div className="contact-info-icon">
                <FiMail size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">muskanbandta1@gmail.com</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" className="contact-info-item">
              <div className="contact-info-icon">
                <FaLinkedinIn size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">LinkedIn</span>
                <span className="contact-info-value">muskan-bandta2004</span>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-heading">Drop a Message</h3>
            <p className="form-subtitle">I'll get back to you soon!</p>
            <div className="form-group">
              <label htmlFor="name">
                <FiUser size={16} />
                Name
              </label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FiMail size={16} />
                Email
              </label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
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
