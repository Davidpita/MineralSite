import React from 'react';

const MineralSection = () => {
  return (
    <section className="mineral-sec" id="mineral">
      <div className="container mineral-inner">
        <div className="mineral-hdr reveal">
          <span className="badge">Expertise em Minerais</span>
          <div className="divider"></div>
          <h2 className="sec-title">Mineral / Minério</h2>
          <p className="sec-desc">Análise técnica especializada de materiais minerais com rigor científico e laudos reconhecidos para todo o território nacional.</p>
        </div>

        <div className="mineral-feature reveal">
          <div className="mineral-feature-img">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80" alt="Amostras minerais" loading="lazy" />
          </div>
          <div className="mineral-feature-txt">
            <span className="badge">Análise de Materiais</span>
            <div className="divider"></div>
            <h3>Descrições Avaliativas de Rocha, Solo e Areia</h3>
            <p>Realizamos descrições avaliativas detalhadas de materiais geológicos — rochas, solos e areias — com caracterização granulométrica, mineralógica e textural, essenciais para projetos de mineração, construção e engenharia geotécnica.</p>
            <div className="mineral-tags">
              <span className="mineral-tag">Rocha</span>
              <span className="mineral-tag">Solo</span>
              <span className="mineral-tag">Areia</span>
              <span className="mineral-tag">Caracterização Granulométrica</span>
              <span className="mineral-tag">Análise Textural</span>
            </div>
          </div>
        </div>

        <div className="mineral-cards" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          {[
            { icon: 'fas fa-microscope', title: 'Laudo Petrográfico', items: ['Identificação mineralógica', 'Análise de texturas e microestruturas', 'Classificação petrográfica', 'Laudo técnico certificado'] },
            { icon: 'fas fa-atom', title: 'Laudo Mineralógico', items: ['Identificação de espécies minerais', 'Análise de propriedades físico-químicas', 'Determinação de teores', 'Relatório técnico detalhado'] },
            { icon: 'fas fa-gem', title: 'Parecer Técnico de Gemas', items: ['Identificação e origem das gemas', 'Análise de qualidade e pureza', 'Classificação conforme normas', 'Parecer para fins legais'] },
            { icon: 'fas fa-flask', title: 'Análise de Minérios', items: ['Análise química e mineralógica', 'Determinação de teor de minério', 'Ensaios de beneficiamento', 'Viabilidade econômica'] }
          ].map((card, index) => (
            <div key={index} className="mineral-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="mineral-card-icon"><i className={card.icon}></i></div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
              <ul>
                {card.items.map((item, i) => (
                  <li key={i}><i className="fas fa-circle"></i> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralSection;