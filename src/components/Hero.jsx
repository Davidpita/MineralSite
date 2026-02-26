import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container reveal">
        <div className="hero-tag"><i className="fas fa-gem"></i>&nbsp; Consultoria Especializada</div>
        <h1>Consultoria em <em>Mineração</em><br />e Meio Ambiente</h1>
        <p>Soluções completas e especializadas para seu empreendimento mineral. Expertise, compromisso e excelência em cada projeto.</p>
        <div className="hero-btns">
          <a href="#contato" className="btn-primary">Fale Conosco <i className="fas fa-arrow-right"></i></a>
          <a href="#servicos" className="btn-outline">Nossos Serviços <i className="fas fa-chevron-down"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;