import { FiUser, FiMail } from 'react-icons/fi'
import profileImg from '../assets/profile.jpeg'

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About Myself</h2>
        <img src={profileImg} alt="Muskan Bandta" className="about-profile-img" />
        <div className="about-content">
          <div className="about-text">
            <p>
              Hey! I'm <strong>Muskan</strong>, a Computer Science Engineering graduate from Chitkara University, Punjab.
              Driven to design scalable digital solutions and solve real-world technical problems, with hands-on
              experience in programming languages like Java and C++, frontend development, UI/UX design, and cloud computing.
            </p>
            <p>
              I have also worked with technologies and domains including AI/ML, SQL, DBMS, and Computer Networks.
              I've contributed to projects as a Frontend Developer and UI/UX Designer, building practical and
              user-friendly digital applications.
            </p>
            <p>
              Currently, I'm working as a <strong>Cloud Associate (Intern) at ZopDev</strong>, developing my expertise in cloud
              computing and SaaS development. Working on cloud infrastructure and backend systems at ZopDev, gaining
              hands-on experience in cloud architecture, deployment pipelines, and scalable backend solutions to support
              SaaS applications and real-world business needs.
            </p>
          </div>
          <div className="about-info-cards">
            <div className="info-card">
              <div className="info-card-icon">
                <FiUser size={20} />
              </div>
              <div className="info-card-content">
                <span className="info-card-label">Name</span>
                <span className="info-card-value">Muskan Bandta</span>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <FiMail size={20} />
              </div>
              <div className="info-card-content">
                <span className="info-card-label">Email</span>
                <a href="mailto:muskanbandta1@gmail.com" className="info-card-value info-card-link">
                  muskanbandta1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
