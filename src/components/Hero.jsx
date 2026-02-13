import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-name">Muskan Bandta</h1>
        <p className="hero-description">
          Passionate about building intelligent, scalable systems at the intersection of cloud and frontend development.
          Results-oriented and adaptable, with strong problem-solving skills and a focus on delivering efficient, real-world
          solutions. Committed to continuous learning and impactful execution. With hands-on experience in programming
          and SaaS environments, I create solutions that work in the real world.
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
