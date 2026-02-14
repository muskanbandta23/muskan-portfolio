import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode size={22} />,
      title: 'Languages & Frameworks',
      skills: ['Java', 'C++', 'JavaScript', 'HTML/CSS', 'React', 'Express', 'Node.js']
    },
    {
      icon: <FiDatabase size={22} />,
      title: 'Technologies & Databases',
      skills: ['AWS', 'SQL', 'DBMS', 'OOP', 'Computer Networking', 'AI/ML', 'Git']
    },
    {
      icon: <FiTool size={22} />,
      title: 'Tools & Platforms',
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
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
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
