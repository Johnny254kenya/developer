
import React, { useEffect, useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Replace with your actual WhatsApp number.
  // Use country code without + or spaces.
  const whatsappNumber = "2547XXXXXXXX";

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =================================
          MAIN FOOTER
      ================================= */}

      <footer className="footer" id="footer">

        <div className="footer__container">

          {/* TOP FOOTER */}
          <div className="footer__top">

            {/* BRAND */}
            <div className="footer__brand">

              <a href="#home" className="footer__logo">
                RONALD<span>.</span>
              </a>

              <p>
                Building digital experiences through
                clean code, creative ideas and modern
                web technologies.
              </p>

              <div className="footer__status">
                <span className="footer__status-dot"></span>
                Available for opportunities
              </div>

            </div>


            {/* QUICK LINKS */}
            <div className="footer__links">

              <h4>Explore</h4>

              <a href="#home">Home</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>

            </div>


            {/* SOCIAL LINKS */}
            <div className="footer__links">

              <h4>Connect</h4>

              <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:YOUR_EMAIL@gmail.com">
                Email ↗
              </a>

            </div>

          </div>


          {/* FOOTER DIVIDER */}
          <div className="footer__divider"></div>


          {/* BOTTOM FOOTER */}
          <div className="footer__bottom">

            <p>
              © {new Date().getFullYear()} Jensen.
              All rights reserved.
            </p>

            <p>
              Designed & built with
              <span className="footer__heart"> ♥ </span>
              and React.
            </p>

          </div>

        </div>

      </footer>


      {/* =================================
          FLOATING WHATSAPP BUTTON
      ================================= */}

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hello Jensen! I visited your portfolio and would like to get in touch."
        )}`}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Jensen on WhatsApp"
        title="Chat on WhatsApp"
      >

        <svg
          viewBox="0 0 32 32"
          width="27"
          height="27"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.01 3C8.84 3 3.01 8.83 3.01 16c0 2.29.6 4.52 1.75 6.49L3 29l6.68-1.73A12.94 12.94 0 0 0 16.01 29C23.18 29 29 23.17 29 16S23.18 3 16.01 3Zm0 23.8c-2.05 0-4.06-.55-5.81-1.6l-.42-.25-3.96 1.03 1.06-3.86-.27-.44A10.76 10.76 0 1 1 16.01 26.8Zm5.9-8.06c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.79.76.33 1.36.52 1.82.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.51.26-.75.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>

        <span className="whatsapp-tooltip">
          Chat with me
        </span>

      </a>


      {/* =================================
          BACK TO TOP BUTTON
      ================================= */}

      <button
        className={`back-to-top ${
          showBackToTop ? "back-to-top--visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        type="button"
      >
        ↑
      </button>

    </>
  );
};

export default Footer;
