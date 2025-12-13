"use client";

import "./project.css";

export default function Project(props) {
  return (
    // Wrapper for one project card in the slider
    <article className="projects-project-box">
      {/* Clickable area: opens the project in a new tab */}
      <a
        href={props.url}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        {/* Project thumbnail image */}
        <img
          className="projects-thumbnail"
          src={props.thumbnail}
          alt={props.name}
          loading="lazy"
        />

        {/* Project title/name */}
        <h3 className="projects-name">{props.name}</h3>
      </a>
    </article>
  );
}
