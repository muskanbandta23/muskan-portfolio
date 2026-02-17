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
              computing and SaaS development. Working on cloud infrastructure and backend systems at ZopDev.
            </p>
          </div>
          <div className="about-info-grid">
            <div className="info-chip">
              <FiUser size={16} />
              <span>Muskan Bandta</span>
            </div>
            <a href="mailto:muskanbandta1@gmail.com" className="info-chip info-chip-link">
              <FiMail size={16} />
              <span>muskanbandta1@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
