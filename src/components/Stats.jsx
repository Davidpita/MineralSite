import React from 'react';

const Stats = () => {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal">
            <div className="stat-num">15+</div>
            <div className="stat-lbl">Anos de Experiência</div>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.1s' }}>
            <div className="stat-num">200+</div>
            <div className="stat-lbl">Projetos Realizados</div>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.2s' }}>
            <div className="stat-num">100%</div>
            <div className="stat-lbl">Clientes Satisfeitos</div>
          </div>
          <div className="stat-item reveal" style={{ transitionDelay: '.3s' }}>
            <div className="stat-num">50+</div>
            <div className="stat-lbl">Profissionais</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;