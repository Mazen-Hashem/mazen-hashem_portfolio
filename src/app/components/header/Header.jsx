"use client";

import "./header.css";

import { useEffect, useRef, useState } from "react";


export default function Header() {
  // State to track whether the mobile menu is open or closed
  const [isActive, setIsActive] = useState(false);

  // Reference to the <nav> element (the collapsible container)
  const navMenuRef = useRef(null);

  // Reference to the <ul> element that contains the menu items
  // Used to measure its height when expanding/collapsing
  const listMenuRef = useRef(null);

  // Toggle the mobile menu open/closed
  function handleToggleMenu() {
    const navMenu = navMenuRef.current;
    const listMenu = listMenuRef.current;

    if (!navMenu || !listMenu) return; // small safety guard

    if (!isActive) {
      // Opening: set the nav height to the scrollHeight of the list
      // so it smoothly expands to fit all items.
      navMenu.style.height = listMenu.scrollHeight + "px";
    } else {
      // Closing: collapse the menu height to 0.
      navMenu.style.height = "0px";
    }

    // Flip the active state
    setIsActive(!isActive);
  };

  // Handle responsive behavior on window resize
  useEffect(() => {
    function resizeNavMenuHeight() {
      const navMenu = navMenuRef.current;
      const listMenu = listMenuRef.current;

      if (!navMenu || !listMenu) return; // small safety guard

      const width = window.innerWidth;

      // Desktop breakpoint (>= 992px):
      // Always show nav normally, no animated height logic.
      if (width >= 992) {
        navMenu.style.height = "inherit";
        setIsActive(false);
        return;
      }

      // Mobile / tablet:
      // If menu is active, match its height to the content;
      // if not active, collapse it.
      if (isActive) {
        navMenu.style.height = `${listMenu.scrollHeight}px`;
      } else {
        navMenu.style.height = "0";
      }
    }

    // Adjust immediately when the component mounts or when isActive changes
    resizeNavMenuHeight();

    // Listen for window resize events to keep the menu behavior correct
    window.addEventListener("resize", resizeNavMenuHeight);

    // Cleanup the listener on unmount or when dependencies change
    return () => window.removeEventListener("resize", resizeNavMenuHeight);
  }, [isActive]);

  // Close the mobile menu when clicking anywhere on the document
  useEffect(() => {
    function closeNav() {
      // Only run if menu is currently open
      if (isActive) {
        navMenuRef.current.style.height = "0";
        setIsActive(false);
      }
    }

    // Attach a global click listener
    document.addEventListener("click", closeNav);

    // Remove it on cleanup to avoid memory leaks / duplicated handlers
    return () => document.removeEventListener("click", closeNav);
  }, [isActive]);

  return (
    <header>
      <div className="container">
        {/* Logo section: clicking logo sends user to the home/hero section */}
        <div className="logo-box">
          <a className="logo-link" href="/">
            <img className="logo-img" src="/images/logo.png" alt="Mazen Hashem home page" />
          </a>
        </div>

        {/* Hamburger button for mobile menu toggle */}
        <div className="btn-box">
          <button
            className={`menu-toggle ${isActive ? "active" : ""}`}
            onClick={handleToggleMenu}
            aria-label={isActive ? "Close navigation menu" : "Open navigation menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navigation menu container */}
        <nav className={`nav-box ${isActive ? "active" : ""}`} ref={navMenuRef}>
          <ul className="list" ref={listMenuRef}>
            <li className="item">
              <a className="link" href="#heroSection">Home</a>
            </li>
            <li className="item">
              <a className="link" href="#aboutSection">About</a>
            </li>
            <li className="item">
              <a className="link" href="#skillsSection">Skills</a>
            </li>
            <li className="item">
              <a className="link" href="#projectsSection">Projects</a>
            </li>
            <li className="item">
              <a className="link" href="#educationSection">Education</a>
            </li>
            <li className="item">
              <a className="link" href="#contactSection">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}