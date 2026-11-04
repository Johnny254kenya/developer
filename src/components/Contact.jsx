
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">

      <div className="contact__container">

        {/* SECTION HEADER */}
        <div className="contact__top">
          <span className="contact__eyebrow">
            <span className="contact__eyebrow-line"></span>
            GET IN TOUCH
          </span>

          <span className="contact__availability">
            <span className="availability-dot"></span>
            Available for projects
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="contact__content">

          {/* LEFT SIDE */}
          <div className="contact__left">

            <h2 className="contact__title">
              Have a project?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p className="contact__description">
              Have an idea, a project or just want to say hello?
              I'd love to hear from you. Let's create something
              meaningful together.
            </p>

            <div className="contact__note">
              <span className="contact__note-icon">↗</span>
              <span>Let's turn your ideas into reality.</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact__right">

            <div className="contact__form-heading">
              <h3>Send me a message</h3>
              <p>Fill in the details below and let's connect.</p>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >

              <div className="contact__field">
                <label htmlFor="contact-name">Your name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email address</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Your message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact__button"
              >
                <span>
                  {submitted ? "Message submitted" : "Send message"}
                </span>

                <span className="contact__button-arrow">
                  ↗
                </span>
              </button>

              <p className="contact__form-footer">
                I'll be happy to hear from you.
              </p>

            </form>

          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="contact__bottom">
          <span>© {new Date().getFullYear()} Jensen. All rights reserved.</span>
          <span>Designed & built with care.</span>
        </div>

      </div>

    </section>
  );
};

export default Contact;
