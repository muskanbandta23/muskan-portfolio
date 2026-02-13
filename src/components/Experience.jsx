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
                <h3>Cloud Associate</h3>
                <span className="timeline-company">ZopDev</span>
              </div>
              <span className="timeline-date">Current</span>
              <p>
                Leveraging and developing skills in cloud computing and SaaS development.
                Working on cloud infrastructure, gaining hands-on experience with cloud architecture,
                deployment pipelines, and building cloud solutions across hyperscalers for
                real-world business problems.
              </p>
              <div className="timeline-tags">
                <span>Cloud Computing</span>
                <span>SaaS</span>
                <span>Cloud Architecture</span>
                <span>Deployment Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
