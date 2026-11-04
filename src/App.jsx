import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./styles/SkeletonLoader.css";
import SkeletonPage from './components/skeletons/SkeletonPage'; // <-- Updated import

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set to 3000ms = 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonPage />; // <-- Using the new wrapper
  }

  return (
    <>
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;