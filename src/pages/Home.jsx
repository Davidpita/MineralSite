import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Mineral from '../components/MineralSection';
import EnvironmentSection from '../components/EnvironmentSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const Home = () => {
  useEffect(() => {
    // Smooth scroll handler para âncoras
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const id = target.getAttribute('href');
      if (id === '#') return;
      
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Intersection Observer para animações
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Mineral />
      <Services />
      <EnvironmentSection />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;