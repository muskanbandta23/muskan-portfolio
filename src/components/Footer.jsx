import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/muskanbandta23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="mailto:muskanbandta1@gmail.com" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
          <p className="footer-text">Built by <span>Muskan</span></p>
          <p className="footer-copyright">Copyright © 2026 by Muskan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
