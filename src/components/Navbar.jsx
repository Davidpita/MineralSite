import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu quando mudar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevenir scroll quando menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          <div className="lg">
            <img src="/img/Captura de tela 2026-02-12 222040.png" alt="Logo" />
          </div>
          <span>MINERAL <span className="amp">&</span> MINERAÇÃO</span>
        </Link>

        {/* Menu Hamburger Button */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          
          {isHome ? (
            // Se estiver na home, usa âncoras
            <>
              <li className="nav-item">
                <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
              </li>
              <li className="nav-item">
                <Link to="/servicos" onClick={handleLinkClick}>Serviços</Link>
              </li>
              <li className="nav-item">
                <Link to="/mineral" onClick={handleLinkClick}>Mineral</Link>
              </li>
              <li className="nav-item">
                <a href="#meio-ambiente" onClick={handleLinkClick}>Meio Ambiente</a>
              </li>
              <li className="nav-item">
                <a href="#contato" className="nav-cta" onClick={handleLinkClick}>Contato</a>
              </li>
            </>
          ) : (
            // Se estiver em outra página, usa Links
            <>
              <li className="nav-item">
                <Link to="/#sobre" onClick={handleLinkClick}>Sobre</Link>
              </li>
              <li className="nav-item">
                <Link to="/servicos" onClick={handleLinkClick}>Serviços</Link>
              </li>
              <li className="nav-item">
                <Link to="/mineral" onClick={handleLinkClick}>Mineral</Link>
              </li>
              <li className="nav-item">
                <Link to="/#meio-ambiente" onClick={handleLinkClick}>Meio Ambiente</Link>
              </li>
              <li className="nav-item">
                <Link to="/#contato" className="nav-cta" onClick={handleLinkClick}>Contato</Link>
              </li>
            </>
          )}
        </ul>

        {/* Overlay para quando o menu estiver aberto */}
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
      </div>
    </nav>
  );
};

export default Navbar;