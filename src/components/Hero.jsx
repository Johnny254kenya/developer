import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  const skillsList = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github", "Tailwind", "Vite", "Figma"];

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="intro">
          <h2>Hello<span>.</span></h2>
          <p className="name">I'm Jensen</p>
          <h1>Software Developer</h1>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Got a project?
            </a>
            <a href="/resume.pdf" className="btn secondary">
              My resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle"></div>
          <span className="arrow left">&lt;</span>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&crop=faces"
            alt="Developer profile"
            className="profile-img"
          />
          <span className="arrow right">&gt;</span>
        </div>
      </div>

      {/* Back and Forth Skills Strip */}
      <div className="skills-marquee">
        <div className="skills-track">
          {skillsList.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;