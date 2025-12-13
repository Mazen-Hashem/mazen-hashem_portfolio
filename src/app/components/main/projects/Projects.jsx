"use client";

import "./projects.css";

/* Reusable Project card component */
import Project from "./project/Project";

/* Data for all projects (name, thumbnail file, URL, etc.) */
import { projectsData } from "./projectsData";

import { useState, useEffect, useRef } from "react";

export default function Projects() {
  // Horizontal translateX value (in px) for the scrollable project list.
  // 0 = starting position. Negative values move content left.
  const [scrollPosition, setScrollPosition] = useState(0);

  // the px number that scrollBox moves when click on left or right buttons
  const [stepSize, setStepSize] = useState(0);

  // Ref for the visible container (viewport) that clips the projects
  const projectsBoxRef = useRef(null);

  // Ref for the full scrollable inner content (all project cards side by side)
  const scrollBoxRef = useRef(null);

  const totalItems = projectsData.length; // Total number of projects/cards

  // Calculate the maximum negative scroll allowed, based on container (viewport) vs content width.
  function calculateMaxScrollPosition() {
    if (projectsBoxRef.current && scrollBoxRef.current) {
      const projectsBoxWidth = projectsBoxRef.current.offsetWidth; // (viewport)
      const scrollBoxWidth = scrollBoxRef.current.offsetWidth;

      // means all the projects already showen, and we dont need to move
      if (projectsBoxWidth >= scrollBoxWidth) return 0;

      return -(scrollBoxWidth - projectsBoxWidth);
    }
    // If refs are not ready yet, default to 0 (no scroll)
    return 0;
  }

  // Max negative scroll we’re allowed to go to the left
  const [maxScrollPosition, setMaxScrollPosition] = useState(calculateMaxScrollPosition);
  // console.log(maxScrollPosition);

  // Calculate step size based on Max scroll and Total number of projects
  useEffect(() => {
    setStepSize(Math.abs(Math.trunc(maxScrollPosition / (totalItems / 2))));
  }, [totalItems, maxScrollPosition])

  // Recalculate maxScrollPosition on initial load and whenever the window resizes.
  useEffect(() => {
    function handleResize() {
      // Recompute max scroll based on new container(viewport)/content sizes
      setMaxScrollPosition(calculateMaxScrollPosition());
    }

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Run once on mount
    handleResize();

    // if the scrollBox is in max right and its Position became = maxScrollPosition,
    // and window resized, keep the scrollPosition = maxScrollPosition
    if (scrollPosition <= maxScrollPosition) {
      const remainingPosition = scrollPosition - maxScrollPosition;
      setScrollPosition((prev) => prev - remainingPosition);
    }

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [totalItems, stepSize]);

  // Handle clicking the left (previous) arrow button
  function handlePrevClick() {
    // Distance from current scrollPosition back to the far-left limit (0).
    // scrollPosition is usually <= 0, so -scrollPosition is a positive number.
    const remainingPosition = -scrollPosition;

    setScrollPosition((prevPosition) => {
      if (remainingPosition >= stepSize) {
        // We can move a full stepSize step to the right (towards 0)
        return prevPosition + stepSize;
      }
      // If less than one stepSize remains to reach 0,
      // only move the remaining amount so we stop exactly at 0.
      return prevPosition + remainingPosition;
    });
  }

  // Handle clicking the right (next) arrow button
  function handleNextClick() {
    // Distance from current position to the maximum negative scroll
    const remainingPosition = scrollPosition - maxScrollPosition;

    setScrollPosition((prevPosition) => {
      if (remainingPosition >= stepSize) {
        // We can move one stepSize further left
        return prevPosition - stepSize;
      }
      // If less than a stepSize remains, move only that amount
      // so we stop exactly at maxScrollPosition.
      return prevPosition - remainingPosition;
    });
  }

  return (
    // "Projects" section – targeted by #projectsSection in the header nav
    <section className="projects-section" id="projectsSection">
      <div className="container">
        {/* Section heading with decorative lines on both sides */}
        <div className="projects-title-box">
          <div className="projects-line"></div>
          <span className="projects-br"></span>
          <h2 className="projects-title">Projects</h2>
          <span className="projects-br"></span>
          <div className="projects-line"></div>
        </div>

        {/* Visible area for the horizontal project slider */}
        <div className="projects-box" ref={projectsBoxRef}>
          {/* Left/right arrow controls */}
          <div className="projects-btns-box">
            {/* Left (previous) arrow */}
            <button
              type="button"
              className="projects-chevron-btn"
              disabled={scrollPosition === 0} // At far-left; can’t go further
              onClick={handlePrevClick}
            >
              <img
                className="projects-chevron-icon"
                src="/icons/chevronLeft.svg"
                alt="Previous"
              />
            </button>

            {/* Right (next) arrow */}
            <button
              type="button"
              className="projects-chevron-btn"
              disabled={scrollPosition === maxScrollPosition} // At far-right limit
              onClick={handleNextClick}
            >
              <img
                className="projects-chevron-icon"
                src="/icons/chevronRight.svg"
                alt="Next"
              />
            </button>
          </div>

          {/* Scrollable inner box that holds all Project cards horizontally.
              The translateX(scrollPosition) moves this left/right when arrows are clicked. */}
          <div
            className="scroll-box"
            style={{ transform: `translateX(${scrollPosition}px)` }}
            ref={scrollBoxRef}
          >
            {projectsData.map((project, index) => {
              return (
                <Project
                  key={index}
                  name={project.name}
                  thumbnail={`/images/projects/${project.thumpnail}`}
                  url={project.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
