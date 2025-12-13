"use client";

import "./skill.css";

export default function Skill(props) {
  return (
    // Wrapper for one skill card
    <article className="skills-skill-box">
      <div className="skills-padding-box">
        <img
          className="skills-image"
          src={props.imageSrc}
          alt={props.text}
          loading="lazy"
        />

        <h3 className="skills-name">{props.text}</h3>
      </div>
    </article>
  );
}
