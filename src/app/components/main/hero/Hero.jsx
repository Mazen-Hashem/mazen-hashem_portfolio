"use client";

import "./hero.css";

export default function Hero() {
  return (
    // Main hero/landing section for the portfolio.
    // `id="heroSection"` is used by the header nav anchors to scroll here.
    <section className="hero-section" id="heroSection">
      {/* Decorative background glow elements for visual effect */}
      <div className="hero-glow"></div>
      <div className="hero-glow"></div>

      <div className="container">
        {/* Left side: text content (intro, role, CTA buttons) */}
        <article className="hero-content-box">
          <span className="hero-greeting">Hi,</span>
          <h1 className="hero-title">I'm Mazen Hashem</h1>
          <p className="hero-description">
            A Frontend Web Developer crafting clean and responsive web experiences.
          </p>
          
          <div className="hero-actions-box">
            {/* CV download button */}
            <a
              href="/cv/Mazen_Hashem_Mohamed_CV.pdf"
              className="hero-btn btn-outline"
              target="_blank"
              rel="noreferrer"
              download
            >
              Download CV
            </a>

            {/* Scrolls down to the contact section when clicked */}
            <a href="#contactSection" className="hero-btn btn-primary">
              Contact me
            </a>
          </div>
        </article>

        {/* Right side: hero image / illustration */}
        <article className="hero-image-box">
          <img
            className="hero-image"
            src="/images/hero/image.png"
            alt="hero image"
            loading="lazy"
          />
        </article>
      </div>
    </section>
  );
}
