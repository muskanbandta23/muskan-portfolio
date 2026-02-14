import { FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FiBriefcase size={20} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Cloud Associate (Intern)</h3>
                <span className="timeline-company">ZopDev</span>
              </div>
              <span className="timeline-date">Nov 2025 - Present</span>
              <ul className="timeline-list">
                <li>Gain hands-on experience in cloud architecture, deployment pipelines, and system optimization.</li>
                <li>Work on cloud infrastructure and backend systems to support scalable SaaS solutions.</li>
                <li>Assisting in analyzing client cloud environments and understanding infrastructure requirements.</li>
                <li>Building foundational expertise in Cloud Computing, FinOps principles, and SaaS development.</li>
                <li>Contribute to scalable, cost-aware solutions for real-world business use cases.</li>
                <li>Researching cloud technologies, infrastructure trends, and cost-optimization strategies to support solution design and client recommendations.</li>
              </ul>
              <div className="timeline-tags">
                <span>Cloud Computing</span>
                <span>SaaS</span>
                <span>FinOps</span>
                <span>Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
