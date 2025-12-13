"use client";

import "./aboutMe.css";

export default function AboutMe() {
  return (
    // "About Me" section – targeted by the header nav via #aboutSection
    <section className="about-section" id="aboutSection">
      <div className="container">
        {/* Left side: image / illustration area */}
        <article className="about-image-box">
          <img
            className="about-image"
            src="/images/about/image.jpg"
            alt="Portrait representing Mazen Hashem"
            loading="lazy"
          />
        </article>

        {/* Right side: text content about you */}
        <article className="about-content-box">
          <h2 className="about-title">About Me</h2>
          <h3 className="about-subtitle">
            Mazen Hashem <span></span> Frontend Web Developer
          </h3>
          <p className="about-description">
            I'm a Frontend Web Developer building responsive, accessible, and
            performance-focused web applications.
          </p>
          <p className="about-description">
            I specialize in turning design concepts into clean, functional code
            using HTML, CSS, JavaScript, and technologies like Bootstrap, React,
            and Next.js.
          </p>
          <p className="about-description">
            Over the years, I've worked on a variety of projects from dynamic
            landing pages to full-scale web apps always with a focus on user
            experience, cross-browser compatibility, and modern best practices.
          </p>
          <p className="about-description">
            I enjoy collaborating with designers and backend teams to bring
            ideas to life, and I take pride in writing maintainable and scalable
            code.
          </p>
          <p className="about-description">
            I'm always learning and keeping up with the latest trends in web
            development to continuously improve my skills and deliver better
            user experiences.
          </p>

          {/* Social links row: LinkedIn, GitHub, WhatsApp */}
          <div className="about-socials-box">
            {/* LinkedIn profile */}
            <a
              href="https://www.linkedin.com/in/mazenhashem/"
              target="_blank"
              rel="noreferrer"
              className="about-social-link"
              aria-label="Open Mazen Hashem’s LinkedIn profile"
            >
              <i className="about-social-icon"></i>
            </a>

            {/* GitHub profile */}
            <a
              href="https://github.com/Mazen-Hashem"
              target="_blank"
              rel="noreferrer"
              className="about-social-link"
              aria-label="Open Mazen Hashem’s GitHub profile"
            >
              <i className="about-social-icon"></i>
            </a>

            {/* WhatsApp contact link with prefilled message. */}
            <a
              href="https://wa.me/201119460657?text=Hi%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect"
              target="_blank"
              rel="noreferrer"
              className="about-social-link"
              aria-label="Start a WhatsApp chat with Mazen Hashem"
            >
              <i className="about-social-icon"></i>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
