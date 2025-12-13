"use client";

import "./skills.css";

/* Reusable Skill item component (individual skill card/badge) */
import Skill from "./skill/Skill";

/* Array of skills (strings) imported from a separate data file */
import { skillsData } from "./skillsData";

export default function Skills() {
  return (
    // "Skills" section – targeted by #skillsSection in the header nav
    <section className="skills-section" id="skillsSection">
      <div className="container">
        {/* Section header with decorative line and label */}
        <div className="skills-title-box">
          <div className="skills-line"></div>
          <span className="skills-br"></span>
          <h2 className="skills-title">Skills</h2>
        </div>

        {/* Skills grid / list */}
        <div className="skills-box">
          {skillsData.map((skill, index) => {
            return (
              <Skill
                key={index}
                imageSrc={`/images/skills/image-${index + 1}.png`} // Each skill image path based on its index
                text={skill} // Skill label text
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
