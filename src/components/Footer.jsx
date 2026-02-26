import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="fbrand">
            <div className="fbrand-name"><i className="fas fa-gem"></i> MINERAL & MINERAÇÃO</div>
            <p>Consultoria especializada em mineração e meio ambiente. Comprometidos com excelência e sustentabilidade em cada projeto.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="fcol">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#sobre"><i className="fas fa-chevron-right"></i> Sobre Nós</a></li>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Serviços</a></li>
              <li><a href="#mineral"><i className="fas fa-chevron-right"></i> Mineral</a></li>
              <li><a href="#meio-ambiente"><i className="fas fa-chevron-right"></i> Meio Ambiente</a></li>
              <li><a href="#contato"><i className="fas fa-chevron-right"></i> Contato</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Mineral / Minério</a></li>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Mineração</a></li>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Geologia</a></li>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Licenciamento</a></li>
              <li><a href="#servicos"><i className="fas fa-chevron-right"></i> Meio Ambiente</a></li>
            </ul>
          </div>
          <div className="fcol">
            <h4>Contato</h4>
            <ul>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i> Salvador, BA</a></li>
              <li><a href="tel:71992543427"><i className="fas fa-phone"></i> 71 99254-3427</a></li>
              <li><a href="mailto:contatomineralemineracao@gmail.com"><i className="fas fa-envelope"></i> E-mail</a></li>
              <li><a href="#"><i className="fas fa-clock"></i> Seg–Sex: 08h–18h</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mineral & Mineração. Todos os direitos reservados.</p>
          <p>Consultoria em Mineração e Meio Ambiente — Salvador, BA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;