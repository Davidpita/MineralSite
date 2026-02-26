import React from 'react';

const About = () => {
  return (
    <section className="about" id="sobre">
      <div className="about-head">
        <div className="sec-hdr center container reveal">
          <span className="badge">Sobre Nós</span>
          <div className="divider"></div>
          <h2 className="sec-title">Mineral & Mineração</h2>
          <p className="sec-desc">Consultoria especializada em mineração e meio ambiente, oferecendo soluções completas para empreendimentos minerais em todas as suas fases.</p>
        </div>
      </div>

      <div className="zz-row reveal">
        <div className="zz-img">
          <img src="./img/img2.jpg" alt="Equipe de campo" loading="lazy" />
        </div>
        <div className="zz-txt">
          <span className="badge">Nosso Propósito</span>
          <div className="divider"></div>
          <h2 className="sec-title">O fazer é o que importa</h2>
          <p>Com satisfação e compromisso, entregamos resultados que superam expectativas em cada projeto. Nossa equipe está preparada para os maiores desafios do setor mineral.</p>
          <p>Atuamos em todo o ciclo do empreendimento — da pesquisa à obtenção de licenças, passando por geologia, geotecnia e assessoria ambiental.</p>
        </div>
      </div>

      <div className="zz-row reveal">
        <div className="zz-img">
          <img src="./img/img3.jpg" alt="Análise de amostras" loading="lazy" />
        </div>
        <div className="zz-txt">
          <span className="badge">Nossa Meta &amp; Valores</span>
          <div className="divider"></div>
          <h2 className="sec-title">Excelência em cada entrega</h2>
          <p>Nossa meta é a satisfação plena dos clientes e gerar resultados excepcionais. Cada projeto é tratado com máximo rigor técnico e ético.</p>
          <div className="vals">
            <div className="val"><i className="fas fa-handshake"></i><h4>Honestidade</h4></div>
            <div className="val"><i className="fas fa-balance-scale"></i><h4>Igualdade</h4></div>
            <div className="val"><i className="fas fa-heart"></i><h4>Altruísmo</h4></div>
            <div className="val"><i className="fas fa-shield-alt"></i><h4>Lealdade</h4></div>
            <div className="val"><i className="fas fa-users"></i><h4>Solidariedade</h4></div>
            <div className="val"><i className="fas fa-star"></i><h4>Ética</h4></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;