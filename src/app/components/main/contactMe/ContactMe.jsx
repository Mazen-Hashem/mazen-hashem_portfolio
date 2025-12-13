"use client";

import "./contactMe.css";

/* Contact form component (inputs, validation, submit logic, etc.) */
import ContactMeForm from "./contactMeForm/ContactMeForm";

export default function ContactMe() {
  return (
    // Contact section – used by the header nav link (#contactSection)
    <section className="contactMe-section" id="contactSection">
      <div className="container">
        {/* Left column: contact info + social links */}
        <article className="contactMe-content-box">
          <h2 className="contactMe-title">Contact Me</h2>

          {/* Contact details (phone + email) */}
          <div className="contactMe-info-box">
            <h3 className="contactMe-info-title">Get In Touch</h3>

            {/* Phone number */}
            <p className="contactMe-info">
              <a
                href="tel:+201119460657"
                className="contactMe-link"
              >
                +20 1119460657
              </a>
            </p>

            {/* Email – opens default mail client */}
            <p className="contactMe-info">
              <a
                href="mailto:Mazen.Hashem.Mohamed@gmail.com"
                className="contactMe-link"
              >
                Mazen.Hashem.Mohamed@gmail.com
              </a>
            </p>
          </div>

          {/* Location block */}
          <div className="contactMe-info-box">
            <h3 className="contactMe-info-title">Where I Am</h3>
            <p className="contactMe-info">Cairo, Egypt</p>
          </div>

          {/* Social links: LinkedIn, GitHub, WhatsApp */}
          <div className="contactMe-socials-box">
            <a
              href="https://www.linkedin.com/in/mazenhashem/"
              target="_blank"
              rel="noreferrer"
              className="contactMe-social-link"
              aria-label="Open Mazen Hashem’s LinkedIn profile"
            >
              {/* Icon visuals handled via CSS (mask + gradient) */}
              <i className="contactMe-social-icon"></i>
            </a>

            <a
              href="https://github.com/Mazen-Hashem"
              target="_blank"
              rel="noreferrer"
              className="contactMe-social-link"
              aria-label="Open Mazen Hashem’s GitHub profile"
            >
              <i className="contactMe-social-icon"></i>
            </a>

            <a
              href="https://wa.me/201119460657?text=Hi%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect"
              target="_blank"
              rel="noreferrer"
              className="contactMe-social-link"
              aria-label="Start a WhatsApp chat with Mazen Hashem"
            >
              <i className="contactMe-social-icon"></i>
            </a>
          </div>
        </article>

        {/* Right column: contact form */}
        <article className="contactMe-form-box">
          <ContactMeForm />
        </article>
      </div>
    </section>
  );
}
