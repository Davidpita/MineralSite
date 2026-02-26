import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

// Dados dos cards com os textos fornecidos
const mineracaoData = {
  cards: [
    {
      id: 1,
      titulo: 'Cessão de Direitos',
      descricao: 'Assessoria completa em processos de transferência de titularidade, cessão de direitos minerários e averbação junto à ANM. Realizamos due diligence documental, análise de regularidade do processo mineral, elaboração de contratos de cessão, escritura pública e todos os trâmites cartorários e administrativos necessários para a transferência segura dos direitos minerários.',
      icone: 'fa-file-signature',
      foto: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80',
      itens: [
        'Due diligence documental',
        'Análise de regularidade',
        'Elaboração de contratos',
        'Escritura pública',
        'Trâmites cartorários'
      ]
    },
    {
      id: 2,
      titulo: 'Guia de Utilização',
      descricao: 'Elaboração de Guias de Utilização para extração de substâncias minerais com finalidade de exploração, incluindo caracterização do material, memorial de cálculo dos volumes, justificativa técnica, mapa da área e demais documentos exigidos pela ANM para regularização da extração.',
      icone: 'fa-clipboard-list',
      foto: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
      itens: [
        'Caracterização do material',
        'Memorial de cálculo',
        'Justificativa técnica',
        'Mapa da área',
        'Regularização ANM'
      ]
    },
    {
      id: 3,
      titulo: 'Requerimento de Pesquisa',
      descricao: 'Elaboração e protocolo de requerimentos de pesquisa mineral junto à ANM (Agência Nacional de Mineração), incluindo delimitação de área, memorial descritivo, plano de pesquisa e documentação técnica completa para início dos trabalhos de exploração mineral.',
      icone: 'fa-search',
      foto: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=80',
      itens: [
        'Delimitação de área',
        'Memorial descritivo',
        'Plano de pesquisa',
        'Protocolo ANM',
        'Documentação técnica'
      ]
    },
    {
      id: 4,
      titulo: 'Gestão de Processos - ANM',
      descricao: 'Gestão completa de processos minerários junto à ANM, incluindo acompanhamento de prazos, cumprimento de exigências técnicas e documentais, protocolo de relatórios, requerimentos diversos, recursos administrativos e interface direta com o órgão regulador.',
      icone: 'fa-tasks',
      foto: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80',
      itens: [
        'Acompanhamento de prazos',
        'Cumprimento de exigências',
        'Protocolo de relatórios',
        'Recursos administrativos',
        'Interface com ANM'
      ]
    },
    {
      id: 5,
      titulo: 'Requerimento de Lavra',
      descricao: 'Elaboração e protocolo do Requerimento de Lavra junto à ANM, com todos os documentos exigidos: Plano de Aproveitamento Econômico (PAE), estudo de viabilidade técnica e financeira, memorial descritivo da jazida, plano de lavra e beneficiamento, e licenciamento ambiental.',
      icone: 'fa-hard-hat',
      foto: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=80',
      itens: [
        'Plano de Aproveitamento Econômico',
        'Estudo de viabilidade',
        'Memorial descritivo',
        'Plano de lavra',
        'Licenciamento ambiental'
      ]
    },
    {
      id: 6,
      titulo: 'Relatório de Pesquisa',
      descricao: 'Elaboração do Relatório Final de Pesquisa Mineral conforme normas da ANM, consolidando todos os trabalhos de exploração realizados: mapeamento geológico, sondagens, trincheiras, análises laboratoriais, cálculos de reservas e viabilidade econômica da jazida.',
      icone: 'fa-file-alt',
      foto: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80',
      itens: [
        'Mapeamento geológico',
        'Sondagens e trincheiras',
        'Análises laboratoriais',
        'Cálculo de reservas',
        'Viabilidade econômica'
      ]
    },
    {
      id: 7,
      titulo: 'Registro de Licença',
      descricao: 'Regularização de licenças e autorizações ambientais junto aos órgãos competentes (INEMA, SEMA, IBAMA), incluindo Licença Prévia (LP), Licença de Instalação (LI) e Licença de Operação (LO). Elaboramos todos os estudos ambientais necessários e acompanhamos o processo até a obtenção da licença.',
      icone: 'fa-leaf',
      foto: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
      itens: [
        'Licença Prévia (LP)',
        'Licença de Instalação (LI)',
        'Licença de Operação (LO)',
        'Estudos ambientais',
        'Acompanhamento processual'
      ]
    }
  ]
};

const Mineral = () => {
  const [cardDestaque, setCardDestaque] = useState(null);
  const [cardsPequenos, setCardsPequenos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inicializarCards();
    window.scrollTo(0, 0);
  }, []);

  const inicializarCards = () => {
    // Pega o primeiro card como destaque (Cessão de Direitos)
    const primeiroCard = mineracaoData.cards[0];
    // Pega os próximos 4 cards como cards pequenos
    const outrosCards = mineracaoData.cards.slice(1, 5);
    
    setCardDestaque(primeiroCard);
    setCardsPequenos(outrosCards);
  };

  const trocarCards = (cardId) => {
    setLoading(true);
    
    const cardIndex = cardsPequenos.findIndex(card => card.id === cardId);
    
    if (cardIndex === -1) {
      setLoading(false);
      return;
    }

    const cardSelecionado = cardsPequenos[cardIndex];
    const cardDestaqueAtual = cardDestaque;

    setCardDestaque(cardSelecionado);
    setCardsPequenos(prevCards => {
      const newCards = [...prevCards];
      newCards[cardIndex] = cardDestaqueAtual;
      return newCards;
    });

    setTimeout(() => {
      scrollToCard();
      setLoading(false);
    }, 200);
  };

  const scrollToCard = () => {
    setTimeout(() => {
      const cardDestaqueElement = document.getElementById('card-destaque');
      if (cardDestaqueElement) {
        const rect = cardDestaqueElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = 100;
        const targetPosition = rect.top + scrollTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        cardDestaqueElement.style.transition = 'box-shadow 0.3s ease';
        cardDestaqueElement.style.boxShadow = '0 0 0 4px #b85070';
        setTimeout(() => {
          if (cardDestaqueElement) {
            cardDestaqueElement.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
          }
        }, 1000);
      }
    }, 200);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      
      {/* Banner da página Mineral */}
      <div className="mineral-banner">
        <div className="mineral-banner-bg"></div>
        <div className="mineral-banner-overlay"></div>
        <div className="mineral-banner-content">
          <div className="container">
            <h1>Mineral <span>&</span> Mineração</h1>
            <p>Assessoria completa em processos minerários e licenciamento</p>
          </div>
        </div>
      </div>

      {/* MINERAL SECTION */}
      <section className="mineral-sec" id="mineral">
        <div className="container mineral-inner">
          {/* Header */}
          <div className="mineral-hdr">
            <span className="badge">Serviços Especializados</span>
            <div className="divider"></div>
            <h2 className="sec-title">GESTÃO DE PROCESSOS MINERÁRIOS</h2>
            <p className="sec-desc">
              Assessoria completa em regularização, licenciamento e gestão de direitos minerários junto à ANM e órgãos ambientais.
            </p>
          </div>

          {/* Card Destaque */}
          {cardDestaque && (
            <div 
              id="card-destaque" 
              className="mineral-feature"
            >
              <div className="mineral-feature-img">
                <img 
                  src={cardDestaque.foto} 
                  alt={cardDestaque.titulo} 
                  loading="lazy"
                />
              </div>
              <div className="mineral-feature-txt">
                <span className="badge">{cardDestaque.titulo}</span>
                <div className="divider"></div>
                <p className="mineral-feature-descricao">{cardDestaque.descricao}</p>
                <div className="mineral-tags">
                  {cardDestaque.itens.map((item, index) => (
                    <span key={index} className="mineral-tag">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Cards Pequenos */}
          <div className="mineral-cards">
            {cardsPequenos.map((card, index) => (
              <div 
                key={card.id}
                className={`mineral-card ${loading ? 'loading' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => trocarCards(card.id)}
                data-clickable="true"
              >
                <div className="mineral-card-icon">
                  <i className={`fas ${card.icone}`}></i>
                </div>
                <h4>{card.titulo}</h4>
                <p className="mineral-card-descricao">
                  {card.descricao.length > 120 
                    ? `${card.descricao.substring(0, 120)}...` 
                    : card.descricao}
                </p>
                <div className="mineral-card-footer">
                  Clique para ver detalhes →
                </div>
              </div>
            ))}
          </div>

          {/* Cards adicionais em grid (os cards 5, 6, 7) */}
          <div className="mineral-grid">
            {mineracaoData.cards.slice(5).map((card) => (
              <div key={card.id} className="mineral-grid-card">
                <div className="mineral-grid-img">
                  <img src={card.foto} alt={card.titulo} loading="lazy" />
                </div>
                <div className="mineral-grid-body">
                  <h3>{card.titulo}</h3>
                  <p>{card.descricao.length > 150 
                    ? `${card.descricao.substring(0, 150)}...` 
                    : card.descricao}
                  </p>
                  <div className="mineral-grid-tags">
                    {card.itens.slice(0, 3).map((item, i) => (
                      <span key={i} className="mineral-grid-tag">• {item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default Mineral;