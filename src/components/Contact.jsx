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
          <p className="contact-tagline">Have something in mind?</p>
          <h2 className="contact-title">Let's Build Something<br /><span className="contact-title-accent">Amazing Together</span></h2>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <div className="input-wrapper">
                <FiUser size={18} className="input-icon" />
                <input type="text" name="name" required placeholder="Your Name" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <FiMail size={18} className="input-icon" />
                <input type="email" name="email" required placeholder="Your Email" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper input-wrapper-textarea">
              <FiMessageSquare size={18} className="input-icon input-icon-textarea" />
              <textarea name="message" required rows="5" placeholder="Tell me about your idea..."></textarea>
            </div>
          </div>
          <button type="submit" className="btn-submit" disabled={sending}>
            {sending ? 'Sending...' : sent ? 'Message Sent! ✓' : <>Send Message <FiSend size={16} /></>}
          </button>
          {error && <p className="form-error">{error}</p>}
          {sent && <p className="form-success">Thank you! Your message has been sent successfully.</p>}
        </form>

        <div className="contact-quick-links">
          <span className="contact-quick-label">or reach out directly</span>
          <div className="contact-quick-items">
            <a href="mailto:muskanbandta1@gmail.com" className="contact-quick-link">
              <FiMail size={15} />
              muskanbandta1@gmail.com
            </a>
            <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" className="contact-quick-link">
              <FaLinkedinIn size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
