import '../../styles/SkeletonLoader.css';
import NavbarSkeleton from './NavbarSkeleton';
import HeroSkeleton from './HeroSkeleton';
import AboutSkeleton from './AboutSkeleton'; // <-- New import

function SkeletonPage() {
  return (
    <div className="skeleton-wrapper fade-out">
      <NavbarSkeleton />
      
      <div className="skeleton-hero-wrapper">
        <HeroSkeleton />
        {/* Bottom Marquee Skeleton */}
        <div className="skeleton-marquee-strip">
          <div className="skeleton-box skeleton-marquee-item"></div>
          <div className="skeleton-box skeleton-marquee-item"></div>
          <div className="skeleton-box skeleton-marquee-item"></div>
          <div className="skeleton-box skeleton-marquee-item"></div>
        </div>
      </div>

      {/* New About Skeleton */}
      <AboutSkeleton />
      
    </div>
  );
}

export default SkeletonPage;