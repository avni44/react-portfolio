import React from 'react'

export default function Skills() {
  const skills = ["React", "JavaScript", "HTML/CSS", "SQL", "Flask", "AI"]

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((s, index) => <li key={index}>{s}</li>)}
      </ul>
    </section>
  )
}
