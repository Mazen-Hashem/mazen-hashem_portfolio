"use client";

import "./educate.css";

/* Single bullet/line for the education description list */
import DescriptionItem from "./descriptionItem/DescriptionItem";

export default function Educate(props) {
  return (
    // One education entry (e.g. a degree, course, or program)
    <article className="education-educate-box">
      <h3 className="education-name">{props.name}</h3>
      <h4 className="education-field">{props.field}</h4>
      <span className="education-date">{props.date}</span>

      {/* Description list: key points, achievements, modules, etc. */}
      <ul className="education-list-description">
        {props.description.map((item, index) => {
          return (
            <DescriptionItem
              key={index}
              descriptionItem={item} // Text for this bullet
            />
          );
        })}
      </ul>
    </article>
  );
}
