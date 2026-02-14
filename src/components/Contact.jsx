import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi'

const Contact = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    // EmailJS: Replace these with your actual IDs after setting up at emailjs.com
    // 1. Create account at https://www.emailjs.com/
    // 2. Add Email Service (Gmail) -> get SERVICE_ID
    // 3. Create Email Template -> get TEMPLATE_ID
    // 4. Get your PUBLIC_KEY from Account > API Keys
    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
      formRef.current,
      'YOUR_PUBLIC_KEY'    // Replace with your EmailJS public key
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
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Got an idea, a project, or just want to say hello? I'd love to hear from you!
        </p>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-info-item">
              <FiMail size={20} />
              <div>
                <h4>Email</h4>
                <a href="mailto:muskanbandta1@gmail.com">muskanbandta1@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <FiUser size={20} />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/muskan-bandta2004
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
              <textarea id="message" name="message" required rows="5" placeholder="Your message..."></textarea>
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
