import React from 'react';

const services = [
  {
    title: 'Mineral / Minério',
    badge: 'fas fa-gem',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    items: [
      'Descrições Avaliativas de Materiais',
      'Laudo Petrográfico',
      'Laudo Mineralógico',
      'Parecer Técnico de Gemas'
    ]
  },
  {
    title: 'Mineração',
    badge: 'fas fa-hard-hat',
    img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
    items: [
      'Pesquisa Mineral',
      'Cubagem de Jazida',
      'Mapeamento Geológico e Topográfico',
      'Plano de Aproveitamento Econômico',
      'Plano de Fechamento de Mina'
    ]
  },
  {
    title: 'Geologia / Geotecnia',
    badge: 'fas fa-mountain',
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80',
    items: [
      'Estudo de Taludes',
      'Ensaios Geotécnicos',
      'Mapeamento Geotécnico / RMRQ',
      'Laudo Geotécnico',
      'Estudo de Viabilidade Econômica'
    ]
  },
  {
    title: 'Licenciamento Ambiental',
    badge: 'fas fa-leaf',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    items: [
      'Projeto Básico do Empreendimento',
      'Roteiro de Caracterização (RCE)',
      'Autorização de Supressão de Vegetação',
      'PGRS — Gerenciamento de Resíduos',
      'PEA — Educação Ambiental'
    ]
  },
  {
    title: 'Empreendimentos Imobiliários',
    badge: 'fas fa-building',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    items: [
      'Assessoria de Venda e Compra de Mina',
      'Avaliação de Jazidas',
      'Due Diligence Mineral',
      'Consultoria Técnica'
    ]
  },
  {
    title: 'Meio Ambiente',
    badge: 'fas fa-tree',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    items: [
      'Estudos e Relatórios de Impacto Ambiental',
      'Planos de Recuperação de Áreas Degradadas',
      'Monitoramento Ambiental',
      'Consultoria Ambiental'
    ]
  }
];

const Services = () => {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="sec-hdr center reveal">
          <span className="badge">Áreas de Atuação</span>
          <div className="divider"></div>
          <h2 className="sec-title">Nossos Serviços</h2>
          <p className="sec-desc">Soluções completas em mineração, geologia e meio ambiente para seu empreendimento</p>
        </div>
      </div>
      <div className="svc-wrap">
        <div className="svc-grid">
          {services.map((service, index) => (
            <div key={index} className="svc-card reveal" style={{ transitionDelay: `${index * 0.07}s` }}>
              <div className="svc-img">
                <img src={service.img} alt={service.title} loading="lazy" />
                <div className="svc-img-overlay"></div>
                <div className="svc-badge"><i className={service.badge}></i></div>
              </div>
              <div className="svc-body">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;