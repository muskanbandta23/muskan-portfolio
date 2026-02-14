import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-intro">Hey, I'm</p>
        <h1 className="hero-name">Muskan</h1>
        <p className="hero-subtitle">Cloud & Frontend Engineer</p>
        <p className="hero-description">
          Driven to create intelligent, and scalable systems at the intersection of cloud and
          frontend development. With hands-on experience in programming,
          AI, and SaaS environments. Having a deep interest in the evolving AI landscape and its impact
          on product innovation and modern system architecture.
        </p>
        <div className="hero-socials">
          <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={22} />
          </a>
          <a href="https://github.com/muskanbandta23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={22} />
          </a>
          <a href="mailto:muskanbandta1@gmail.com" aria-label="Email">
            <FiMail size={22} />
          </a>
        </div>
        <a href="#about" className="hero-scroll">
          <FiArrowDown size={20} />
          <span>Scroll Down</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
