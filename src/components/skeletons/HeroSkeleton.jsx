function HeroSkeleton() {
  return (
    <div className="skeleton-hero">
      {/* Left Side: Text */}
      <div className="skeleton-hero-content">
        <div className="skeleton-box skeleton-greeting"></div>
        <div className="skeleton-box skeleton-name"></div>
        <div className="skeleton-box skeleton-title"></div>
        <div className="skeleton-buttons">
          <div className="skeleton-box skeleton-btn"></div>
          <div className="skeleton-box skeleton-btn"></div>
        </div>
      </div>

      {/* Right Side: Image & Ring */}
      <div className="skeleton-hero-image">
        <div className="skeleton-circle"></div>
        <div className="skeleton-box skeleton-portrait"></div>
      </div>
    </div>
  );
}

export default HeroSkeleton;