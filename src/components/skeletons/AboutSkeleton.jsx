function AboutSkeleton() {
  return (
    <div className="skeleton-about">
      <div className="skeleton-about__container">
        
        {/* Left Side: Timeline */}
        <div className="skeleton-about__services">
          {/* The vertical line */}
          <div className="skeleton-vertical-line"></div>
          
          {/* 4 Service items */}
          {[1, 2, 3, 4].map((item) => (
            <div className="skeleton-service-item" key={item}>
              <div className="skeleton-dot"></div>
              <div className="skeleton-box skeleton-icon"></div>
              <div className="skeleton-box skeleton-text"></div>
            </div>
          ))}
        </div>

        {/* Right Side: Content & Stats */}
        <div className="skeleton-about__content">
          <div className="skeleton-box skeleton-heading"></div>
          
          <div className="skeleton-box skeleton-bio"></div>
          <div className="skeleton-box skeleton-bio"></div>
          <div className="skeleton-box skeleton-bio-short"></div>

          <div className="skeleton-about__stats">
            {[1, 2, 3].map((stat) => (
              <div className="skeleton-stat-item" key={stat}>
                <div className="skeleton-box skeleton-stat-number"></div>
                <div className="skeleton-box skeleton-stat-label"></div>
                <div className="skeleton-box skeleton-stat-label-short"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSkeleton;