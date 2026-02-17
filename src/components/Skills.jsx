import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode size={20} />,
      title: 'Languages & Frameworks',
      subtitle: 'Building blocks of my code',
      skills: ['Java', 'C++', 'JavaScript', 'HTML/CSS', 'React', 'Express', 'Node.js']
    },
    {
      icon: <FiDatabase size={20} />,
      title: 'Technologies & Databases',
      subtitle: 'Powering the backend',
      skills: ['AWS', 'SQL', 'DBMS', 'OOP', 'Computer Networking', 'AI/ML', 'Git']
    },
    {
      icon: <FiTool size={20} />,
      title: 'Tools & Platforms',
      subtitle: 'My daily toolkit',
      skills: ['VS Code', 'IntelliJ IDEA', 'GitHub', 'Google Colab', 'Figma']
    }
  ]

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="skill-category-number">0{index + 1}</div>
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <div>
                  <h3>{category.title}</h3>
                  <p className="skill-category-subtitle">{category.subtitle}</p>
                </div>
              </div>
              <div className="skill-divider"></div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    <span className="skill-tag-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
