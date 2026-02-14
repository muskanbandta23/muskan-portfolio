import { FiBookOpen } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      institution: 'Chitkara Institute of Engineering & Technology',
      degree: 'B.E. in Computer Science',
      period: 'Sept 2022 - June 2026',
      description: 'Focused on core CS, cloud computing, AI/ML, and frontend development'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class XII',
      period: '2022',
      description: 'Science stream with Computer Science'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class X',
      period: '2020',
      description: 'Foundation in Mathematics and Science'
    }
  ]

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className="edu-timeline-item" key={index}>
              <div className="edu-timeline-dot">
                <FiBookOpen size={16} />
              </div>
              <div className="edu-timeline-content">
                <div className="edu-timeline-header">
                  <h3>{edu.institution}</h3>
                  <span className="edu-timeline-period">{edu.period}</span>
                </div>
                <p className="edu-timeline-degree">{edu.degree}</p>
                <p className="edu-timeline-desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
