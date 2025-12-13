"use client";

import "./descriptionItem.css";

export default function DescriptionItem(props) {
  return (
    // One bullet line in the education description list
    <li className="education-description-item">
      {props.descriptionItem}
    </li>
  );
}
