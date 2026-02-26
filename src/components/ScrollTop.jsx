import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`scroll-top ${show ? 'show' : ''}`} onClick={scrollToTop} id="scrollTop">
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollTop;