import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'InkGen : Content Engine',
      description: 'Built a 4-stage LLM pipeline (research, outline, plan, write) orchestrating OpenAI and Claude with automated quality checks. Real-time SSE dashboard streams progress. End-to-end content from one prompt to publishable ebook, blog or social asset, with no manual editing in the loop.',
      tech: ['OpenAI', 'Claude', 'Quarto', 'D2'],
      github: 'https://github.com/muskanbandta23/inkgen',
      live: 'https://output-iota-nine.vercel.app/index.html'
    },
    {
      title: 'Competitor Intelligence Dashboard',
      description: 'Autonomous competitor-monitoring system that scrapes 23+ sources via Google News RSS and Reddit API, with zero manual work after deploy. Replaces hours of manual research at ZopDev with a live, self-publishing intel dashboard.',
      tech: ['GitHub Actions', 'RSS', 'Reddit API', 'CI/CD'],
      github: 'https://github.com/muskanbandta23/zopnight-competitor-intel',
      live: 'https://muskanbandta23.github.io/zopnight-competitor-intel/'
    },
    {
      title: 'LinkedIn Research Assistant (AI Automation for GTM)',
      description: 'Lead-discovery automation for GTM with ICP similarity scoring against 273+ cloud companies. BrightData and Google Search agents handle the prospecting; my scoring layer ranks and filters by region. Replaces hours of manual LinkedIn prospecting per region.',
      tech: ['BrightData API', 'Google Search', 'GitHub Pages'],
      github: 'https://github.com/muskanbandta23/linkedin-research-assistant',
      live: 'https://muskanbandta23.github.io/linkedin-research-assistant/'
    },
    {
      title: 'ZopMatch — Real-time Multiplayer Memory Game',
      description: 'Memory game with three modes: solo against the clock, pass-and-play on one device, and online rooms for 2–4 players via 4-letter codes. Built with Node.js and WebSockets, so all players see the same board update live in real time. Deployed on ZopCloud.',
      tech: ['Node.js', 'WebSockets', 'ZopCloud'],
      github: 'https://github.com/muskanbandta23/zopmatch',
      live: 'https://zopmatch-3239e0.zopcloud.zop.dev/'
    },
    {
      title: "Hosteller's Emporium",
      description: 'E-commerce platform for university students to buy and sell campus products with secure authentication and responsive UI.',
      tech: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/muskanbandta23/Hosteller-s-Emporium'
    },
  ]

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
