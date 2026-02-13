import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'IRCTC Clone Website',
      description: 'Developed a ticket booking system simulating the IRCTC website. Includes user authentication, train search, train booking, and a basic payment gateway interface with a responsive UI.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/muskanbandta23/IRCTC'
    },
    {
      title: "Hosteller's Emporium",
      description: 'An e-commerce website exclusively for university students to buy and sell products within the campus. Features include a chatbot for improved user interaction. Contributed as Front-End Developer and UX/UI Designer.',
      tech: ['React', 'Node.js', 'CSS'],
      github: 'https://github.com/muskanbandta23/Hosteller-s-Emporium'
    },
    {
      title: 'Gold Stock Prices Prediction',
      description: 'Analysed gold stock datasets to clean, preprocess, and visualize data. Performed time-series analysis and identified predictive insights on gold price trends using Seaborn and Matplotlib.',
      tech: ['Python', 'Seaborn', 'Matplotlib', 'Pandas'],
      github: 'https://github.com/muskanbandta23/Gold-Price-Prediction'
    },
    {
      title: 'Fashion E-Commerce Website',
      description: 'Created a static front-end design for an online fashion store. Focused on crafting the visual layout, styling, and a modern shopping experience.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/muskanbandta23/Frontend-project-online-Fashion'
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
