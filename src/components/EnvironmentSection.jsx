import React from 'react';

const envItems = [
  {
    badge: 'Estudos Ambientais',
    title: 'Avaliação e Diagnóstico de Impactos',
    desc: 'Estudos ambientais completos para caracterizar e avaliar os impactos do empreendimento no ecossistema, garantindo conformidade com a legislação.',
    img: './img/img1.jpg',
    items: [
      'Estudo de Impacto Ambiental (EIA)',
      'Relatório de Impacto Ambiental (RIMA)',
      'Diagnóstico Ambiental de Área',
      'Inventário de Fauna e Flora'
    ]
  },
  {
    badge: 'Recuperação de Áreas',
    title: 'Plano de Recuperação de Áreas Degradadas',
    desc: 'Planos detalhados para restaurar áreas afetadas pela atividade minerária, com foco em sustentabilidade e conformidade ao PRAD.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&q=80',
    items: [
      'Elaboração do PRAD',
      'Revegetação com espécies nativas',
      'Reabilitação de solo e hidrologia',
      'Monitoramento pós-recuperação'
    ]
  },
  {
    badge: 'Monitoramento',
    title: 'Monitoramento Ambiental Contínuo',
    desc: 'Programas de monitoramento para acompanhar as condições durante e após as operações, assegurando conformidade com as condicionantes das licenças.',
    img: './img/img.jpg',
    items: [
      'Monitoramento de qualidade da água',
      'Monitoramento de ar e ruído',
      'Controle de erosão e sedimentação',
      'Relatórios para órgãos ambientais'
    ]
  }
];

const EnvironmentSection = () => {
  return (
    <section className="env-sec" id="meio-ambiente">
      <div className="env-head">
        <div className="sec-hdr center container reveal">
          <span className="badge">Comprometimento Ambiental</span>
          <div className="divider"></div>
          <h2 className="sec-title">Meio Ambiente</h2>
          <p className="sec-desc">Integramos expertise técnica e responsabilidade ambiental para garantir o desenvolvimento sustentável do seu empreendimento.</p>
        </div>
      </div>

      {envItems.map((item, index) => (
        <div key={index} className="env-row reveal">
          <div className="env-img"><img src={item.img} alt={item.title} loading="lazy" /></div>
          <div className="env-txt">
            <span className="badge">{item.badge}</span>
            <div className="divider"></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <ul className="env-list">
              {item.items.map((listItem, i) => (
                <li key={i}><i className="fas fa-check-circle"></i> {listItem}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EnvironmentSection;