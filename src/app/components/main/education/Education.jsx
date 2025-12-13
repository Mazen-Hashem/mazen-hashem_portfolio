"use client";

import "./education.css";

/* Single education item component (school / degree / course entry) */
import Educate from "./educate/Educate";

/* Data array with all education entries */
import { educationData } from "./educationData";

export default function Education() {
  return (
    // Education section – targeted via #educationSection from the header nav
    <section className="education-section" id="educationSection">
      <div className="container">
        {/* Section heading with decorative bar + line on the right */}
        <div className="education-title-box">
          <h2 className="education-title">Education</h2>
          <span className="education-br"></span>
          <div className="education-line"></div>
        </div>

        {/* List/timeline of education entries */}
        <div className="education-content-box">
          {educationData.map((educate, index) => {
            return (
              <Educate
                key={index}
                name={educate.name}  // e.g. university or institution name
                field={educate.field} // e.g. "Computer Science"
                date={educate.date}   // e.g. "2020 – Present"
                description={educate.description} // extra details
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
