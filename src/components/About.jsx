import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        
        {/* Left Side: Services / Timeline */}
        <div className="about__services">
          <div className="service-item">
            <div className="service-icon">
              {/* Code Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <span className="service-name">Website Development</span>
          </div>

          <div className="service-item">
            <div className="service-icon">
              {/* Mobile Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <span className="service-name">App Development</span>
          </div>

          {/* NEW SOCIAL MEDIA ITEM */}
          <div className="service-item">
            <div className="service-icon">
              {/* Social Media Icon (Smartphone with network nodes) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3M12 11.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h9M7.5 12.75h1.5m6 0h1.5" />
                <circle cx="12" cy="17.25" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span className="service-name">Social Media Management</span>
          </div>

          <div className="service-item">
            <div className="service-icon">
              {/* Server Icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6.75a3 3 0 013-3h13.5a3 3 0 013 3v4.5a3 3 0 01-3 3m-13.5 0v4.5a3 3 0 003 3h13.5a3 3 0 003-3v-4.5m-13.5 0h13.5" />
              </svg>
            </div>
            <span className="service-name">Website Hosting</span>
          </div>
        </div>

        {/* Right Side: Bio & Stats */}
        <div className="about__content">
          <h2 className="about__title">About me</h2>
          <p className="about__bio">
            I started my software journey from photography. Through that, I learned to 
            love the process of creating from scratch. Since then, this has led me to 
            software development as it fulfills my love for learning and building things.
          </p>

          <div className="about__stats">
            <div className="stat-item">
              <h3 className="stat-number">120<span>+</span></h3>
              <p className="stat-label">Completed<br/>Projects</p>
            </div>
            
            <div className="stat-item">
              <h3 className="stat-number">95<span>%</span></h3>
              <p className="stat-label">Client<br/>satisfaction</p>
            </div>
            
            <div className="stat-item">
              <h3 className="stat-number">10<span>+</span></h3>
              <p className="stat-label">Years of<br/>experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;