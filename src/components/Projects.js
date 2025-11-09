import React from "react";
import "./Projects.css";

const projects = [
  { title: "Portfolio Website", desc: "React + Vite responsive portfolio" },
  { title: "Movie Search App", desc: "Search movies using API" },
  { title: "Recipe Book App", desc: "CRUD app with React Context" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {/* <a href="#" className="btn">View</a> */}
          </div>
        ))}
      </div>
    </section>
  );
}

