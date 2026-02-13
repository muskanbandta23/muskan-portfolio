import { FiStar, FiExternalLink } from 'react-icons/fi'

const Achievements = () => {
  const achievements = [
    {
      title: 'Bengaluru Tech Summit 2025',
      description: 'Represented ZopDev at Bengaluru Tech Summit 2025, showcasing cloud solutions and engaging with the tech community.',
      link: 'https://linkedin.com/in/muskan-bandta2004/'
    },
    {
      title: 'India Digital Summit 2026 - AI Zone',
      description: 'Represented ZopDev at India Digital Summit 2026 in the AI Zone, exploring cutting-edge AI and cloud technologies.',
      link: 'https://linkedin.com/in/muskan-bandta2004/'
    },
    {
      title: 'Codeless Blockchain Hackathon',
      description: 'Participated in Codeless Blockchain Hackathon with Joget, exploring no-code blockchain solutions.',
      date: 'Feb 2023'
    },
    {
      title: "Phosphenes' Code War - Trade",
      description: 'Took part in Code War - Trade, applying programming and financial skills in a competitive environment.',
      date: 'Mar 2023'
    }
  ]

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Events</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">
                <FiStar size={20} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                  View on LinkedIn <FiExternalLink size={14} />
                </a>
              )}
              {item.date && <span className="achievement-date">{item.date}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
