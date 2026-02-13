const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">Who Am I</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Muskan, a Computer Science Engineering graduate from Chitkara University.
              Passionate about designing scalable digital solutions and solving real-world tech problems,
              with expertise in programming languages like Java and C++, and a growing interest in
              frontend development and modern cloud technologies.
            </p>
            <p>
              Currently working as a <strong>Cloud Associate at ZopDev</strong>, where I leverage and develop
              skills in cloud computing and SaaS development. I work on cloud infrastructure, gaining
              hands-on experience with cloud architecture, deployment pipelines, and building cloud
              solutions across hyperscalers for real-world business problems.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Name</span>
                <span className="detail-value">Muskan Bandta</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Email</span>
                <span className="detail-value">muskanbandta1@gmail.com</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Chandigarh, India</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Current Role</span>
                <span className="detail-value">Cloud Associate @ ZopDev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
