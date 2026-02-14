import { FiExternalLink } from 'react-icons/fi'

const Achievements = () => {
  const featured = [
    {
      badge: '\uD83C\uDFA4',
      title: 'Bengaluru Tech Summit 2025',
      description: 'Represented zopnight by ZopDev at Bengaluru Tech Summit 2025, showcasing cloud solutions and engaging with the tech community.',
      link: 'https://www.linkedin.com/posts/muskan-bandta2004_bengalurutechsummit2025-cloud-finops-activity-7398067320901890048-D33w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlsv_MBgypIci3sQ2e97iLLmelbF2UQ_fc',
      tag: 'Company Representative'
    },
    {
      badge: '\uD83E\uDD16',
      title: 'India Digital Summit 2026 — AI Zone',
      description: 'Represented ZopDev at India Digital Summit 2026 in the AI Zone, exploring cutting-edge AI and cloud technologies.',
      link: 'https://www.linkedin.com/posts/muskan-bandta2004_indiadigitalsummit-ids2026-aizone-activity-7423408831151640576-LkTi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlsv_MBgypIci3sQ2e97iLLmelbF2UQ_fc',
      tag: 'AI & Cloud'
    }
  ]

  const compact = [
    {
      badge: '\uD83D\uDCBB',
      title: 'Codeless Blockchain Hackathon',
      description: 'Participated with Joget, exploring no-code blockchain solutions.',
      date: 'Feb 2023'
    },
    {
      badge: '\u26A1',
      title: "Phosphenes' Code War — Trade",
      description: 'Applied programming and financial skills in a competitive environment.',
      date: 'Mar 2023'
    }
  ]

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Events</h2>

        <div className="achievements-featured">
          {featured.map((item, index) => (
            <div className="achievement-featured-card" key={index}>
              <div className="achievement-badge">{item.badge}</div>
              <div className="achievement-featured-content">
                <div className="achievement-featured-top">
                  <h3>{item.title}</h3>
                  <span className="achievement-tag">{item.tag}</span>
                </div>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-featured-link">
                    View on LinkedIn <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-compact">
          {compact.map((item, index) => (
            <div className="achievement-compact-card" key={index}>
              <span className="achievement-compact-badge">{item.badge}</span>
              <div className="achievement-compact-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <span className="achievement-compact-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
