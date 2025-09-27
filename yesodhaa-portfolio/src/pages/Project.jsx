import React from "react";
import "./Project.css";
import techLogos from "./techLogos";

const projects = [
  {
    name: "Personal Portfolio",
    image: "/tech/vite.svg", // Replace with your portfolio screenshot
    url: "http://localhost:5173/", // Replace with your actual portfolio URL
    description:
      "A personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of my skills and projects.",
    features: [
      "Integrated PostgreSQL and Prisma for efficient data handling.",
      "Built with React and Vite for performance and scalability.",
      "Implemented state management with Zustand and validation using Zod.",
      "Secured authentication with Auth.js for user account management.",
    ],
    tech: [
      "React",
      "Vite",
      "Framer Motion",
      "CSS",
    ],
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => (
  <div className="project-card" onClick={() => window.open(project.url, "_blank")}> 
    <img src={project.image} alt={project.name} className="project-image" />
  </div>
);

const ProjectDescription = ({ project }) => (
  <div className="project-desc">
    <h2 className="project-title">{project.name}</h2>
    <p className="project-summary">{project.description}</p>
    <ul className="project-features">
      {project.features.map((f, i) => (
        <li key={i}>{f}</li>
      ))}
    </ul>
    <div className="project-tech">
      {project.tech.map((t, i) => {
        const logo = techLogos[t];
        return (
          <span className="tech-pill" key={i}>
            {logo && (
              <img
                src={logo.src}
                alt={logo.alt}
                className="tech-logo"
                style={{ width: "1.3em", height: "1.3em", verticalAlign: "middle", marginRight: "0.5em" }}
              />
            )}
            {t}
          </span>
        );
      })}
    </div>
  </div>
);

export default function Project() {
  return (
    <div className="project-bg">
      <div className="project-title">Projects</div>
      <div className="project-cards">
        {projects.map((project, i) => (
          <div className="project-row" key={i}>
            <ProjectCard project={project} />
            <ProjectDescription project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
