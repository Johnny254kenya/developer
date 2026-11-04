
import React from "react";


const SkillsSkeleton = () => {
  return (
    <section className="skills-section skeleton-section" id="skills">
      <div className="skills-container">

        {/* HEADER SKELETON */}
        <div className="skills-header skeleton-header">
          <div className="skeleton skeleton-eyebrow"></div>
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>
        </div>

        {/* GRID SKELETON */}
        <div className="skills-grid">
          {[1, 2, 3].map((card) => (
            <div className="skill-card skeleton-card" key={card}>

              {/* Card header */}
              <div className="skeleton skeleton-number"></div>
              <div className="skeleton skeleton-card-title"></div>
              <div className="skeleton skeleton-card-text"></div>
              <div className="skeleton skeleton-card-text short"></div>

              {/* Skill rows */}
              <div className="skill-list">
                {[1, 2, 3, 4].map((row) => (
                  <div className="skill-item skeleton-item" key={row}>
                    <div className="skeleton skeleton-icon"></div>
                    <div className="skeleton-details">
                      <div className="skeleton skeleton-name"></div>
                      <div className="skeleton skeleton-level"></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM NOTE SKELETON */}
        <div className="skills-bottom skeleton-bottom">
          <div className="skeleton skeleton-dot"></div>
          <div className="skeleton skeleton-note"></div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSkeleton;