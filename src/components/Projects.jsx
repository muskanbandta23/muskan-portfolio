import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'InkGen : AI Content Engine',
      description: 'Modular pipeline generating multi-format ebooks, blogs, and social assets using a 4-step workflow (research, outline, plan, write) with automated quality checks. Features a real-time dashboard with SSE streaming.',
      tech: ['Python', 'OpenAI', 'Claude', 'Gemini', 'SSE', 'Quarto', 'D2'],
      github: 'https://github.com/muskanbandta23/inkgen',
      live: 'https://output-iota-nine.vercel.app/index.html'
    },
    {
      title: "Hosteller's Emporium",
      description: 'E-commerce platform for university students to buy and sell campus products with secure authentication and responsive UI.',
      tech: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/muskanbandta23/Hosteller-s-Emporium'
    },
    {
      title: 'Competitor Intelligence Dashboard',
      description: 'AI-driven competitor monitoring dashboard tracking 23+ sources via Google News RSS, Reddit API, and automated GitHub Actions CI/CD pipeline with 4x daily updates.',
      tech: ['Python', 'GitHub Actions', 'RSS', 'Reddit API', 'CI/CD'],
      github: 'https://github.com/muskanbandta23/zopnight-competitor-intel',
      live: 'https://muskanbandta23.github.io/zopnight-competitor-intel/'
    },
    {
      title: 'LinkedIn Research Assistant',
      description: 'Full-stack lead discovery tool with ICP similarity scoring, region-based filtering, and a database of 273+ cloud companies using BrightData API and Google Search.',
      tech: ['Python', 'BrightData API', 'Google Search', 'GitHub Pages'],
      github: 'https://github.com/muskanbandta23/linkedin-research-assistant',
      live: 'https://muskanbandta23.github.io/linkedin-research-assistant/'
    },
    {
      title: 'Gold Stock Price Prediction',
      description: 'Time-series analysis on gold stock datasets with predictive insights and data visualization using Seaborn and Matplotlib.',
      tech: ['Python', 'Seaborn', 'Matplotlib', 'Pandas'],
      github: 'https://github.com/muskanbandta23/Gold-Price-Prediction'
    }
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
