import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">Muskan Bandta</h1>
        <div className="hero-tagline">
          <span>Cloud</span>
          <span className="hero-dot"></span>
          <span>Frontend</span>
          <span className="hero-dot"></span>
          <span>SaaS</span>
        </div>
        <p className="hero-description">
          I'm a developer passionate about building intelligent, scalable systems at the intersection
          of <span className="hero-highlight">cloud and frontend development</span>. With hands-on experience
          in programming and <span className="hero-highlight">SaaS environments</span>, bringing a results-oriented
          approach to creating efficient, real-world solutions. My adaptability and
          strong <span className="hero-highlight">problem-solving skills</span> enable me to tackle complex
          challenges while maintaining a focus on impactful execution. Driven by continuous learning
          and a deep interest in technology.
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
