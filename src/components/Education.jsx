import { FiBookOpen } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      institution: 'Chitkara Institute of Engineering & Technology',
      degree: 'B.E. in Computer Science',
      period: 'Sept 2022 - June 2026'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class XII',
      period: '2022'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class X',
      period: '2020'
    }
  ]

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <FiBookOpen size={20} />
              </div>
              <h3>{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              <span className="education-period">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
