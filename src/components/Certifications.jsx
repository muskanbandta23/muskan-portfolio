import { FiAward } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      title: 'IBM Machine Learning',
      platform: 'Coursera',
      date: 'March 2025'
    },
    {
      title: 'Strategic Leadership: Impact, Change, and Decision-Making',
      platform: 'Coursera',
      date: 'February 2024'
    },
    {
      title: 'Product Ideation, Design, and Management',
      platform: 'Coursera',
      date: 'October 2023'
    }
  ]

  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">
                <FiAward size={24} />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-platform">{cert.platform}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
