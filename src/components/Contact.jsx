import { useState } from 'react'
import { FiSend, FiMail, FiUser, FiMessageSquare, FiArrowUpRight } from 'react-icons/fi'
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
          <p className="contact-tagline">Have something in mind?</p>
          <h2 className="contact-title">Let's Build Something<br /><span className="contact-title-accent">Amazing Together</span></h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="contact-info-heading">Prefer a direct conversation?</p>

            <a href="mailto:muskanbandta1@gmail.com" className="contact-info-card">
              <div className="contact-card-left">
                <div className="contact-card-icon">
                  <FiMail size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-title">Shoot me an Email</span>
                  <span className="contact-card-value">muskanbandta1@gmail.com</span>
                </div>
              </div>
              <div className="contact-card-arrow">
                <FiArrowUpRight size={18} />
              </div>
            </a>

            <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" className="contact-info-card">
              <div className="contact-card-left">
                <div className="contact-card-icon contact-card-icon-linkedin">
                  <FaLinkedinIn size={22} />
                </div>
                <div className="contact-card-details">
                  <span className="contact-card-title">Let's Connect on LinkedIn</span>
                  <span className="contact-card-value">muskan-bandta2004</span>
                </div>
              </div>
              <div className="contact-card-arrow">
                <FiArrowUpRight size={18} />
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-header">
              <div className="form-header-icon">
                <FiSend size={20} />
              </div>
              <div>
                <h3 className="form-heading">Drop a Message</h3>
                <p className="form-subtitle">I'd love to hear from you!</p>
              </div>
            </div>
            <div className="form-divider"></div>
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
