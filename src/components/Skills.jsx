import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode size={24} />,
      title: 'Programming Languages',
      skills: ['Java', 'C++', 'HTML/CSS', 'JavaScript', 'React', 'Express']
    },
    {
      icon: <FiDatabase size={24} />,
      title: 'Technologies & Databases',
      skills: ['DBMS', 'OOP', 'AWS', 'SQL', 'Computer Networking', 'Node.js', 'Git', 'GitHub']
    },
    {
      icon: <FiTool size={24} />,
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Google Colab']
    }
  ]

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
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
