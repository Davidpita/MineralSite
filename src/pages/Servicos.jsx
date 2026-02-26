import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';


const Servicos = () => {

    const navigate = useNavigate();
  // Dados organizados por categoria
  const categorias = [
    {
      id: 'mineral',
      titulo: 'Mineral',
      servicos: [
        {
          id: 1,
          titulo: 'Descrições Avaliativa de Materiais',
          descricao: 'Análise detalhada de materiais geológicos para identificação de propriedades e potencial econômico.',
          imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80'
        },
        {
          id: 2,
          titulo: 'Laudo Petrográfico',
          descricao: 'Estudo microscópico de rochas para identificação de minerais, texturas e processos de formação.',
          imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80'
        },
        {
          id: 3,
          titulo: 'Laudo Mineralógico',
          descricao: 'Análise qualitativa e quantitativa de minerais em amostras para determinação de composição.',
          imagem: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80'
        },
        {
          id: 4,
          titulo: 'Parecer Técnico de Gemas',
          descricao: 'Avaliação especializada de gemas incluindo identificação, classificação e valor comercial.',
          imagem: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80'
        }
      ]
    },
    {
      id: 'mineracao',
      titulo: 'Mineração',
      servicos: [
        {
          id: 5,
          titulo: 'Pesquisa Mineral',
          descricao: 'Atividades de prospecção e exploração para definição de depósitos minerais economicamente viáveis.',
          imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80'
        },
        {
          id: 6,
          titulo: 'Cubagem de Jazida',
          descricao: 'Cálculo preciso de volume e tonelagem de minério em jazidas utilizando métodos geoestatísticos.',
          imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
        },
        {
          id: 7,
          titulo: 'Parecer Técnico',
          descricao: 'Análise especializada sobre viabilidade técnica e econômica de projetos minerários.',
          imagem: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80'
        },
        {
          id: 8,
          titulo: 'Mapeamento Geológico',
          descricao: 'Levantamento sistemático para caracterização litológica e estrutural de áreas de interesse.',
          imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80'
        },
        {
          id: 9,
          titulo: 'Mapeamento Topográfico',
          descricao: 'Levantamento planialtimétrico com geração de curvas de nível e modelos digitais de terreno.',
          imagem: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80'
        },
        {
          id: 10,
          titulo: 'Plano de Aproveitamento Econômico',
          descricao: 'Documento que define viabilidade econômica da mina com métodos de lavra e beneficiamento.',
          imagem: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80'
        },
        {
          id: 11,
          titulo: 'Plano de Fechamento de Mina',
          descricao: 'Estratégias para descomissionamento seguro e recuperação ambiental de áreas mineradas.',
          imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80'
        },
        {
          id: 12,
          titulo: 'Plano de Lavra',
          descricao: 'Detalhamento operacional da extração mineral com sequenciamento e equipamentos.',
          imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80'
        },
        {
          id: 13,
          titulo: 'Relatório Final de Pesquisa',
          descricao: 'Compilação completa dos resultados da pesquisa mineral para aprovação da ANM.',
          imagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80'
        },
        {
          id: 14,
          titulo: 'Relatório Parcial de Pesquisa',
          descricao: 'Relatório intermediário dos trabalhos de pesquisa mineral em andamento.',
          imagem: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
        },
        {
          id: 15,
          titulo: 'Requerimento de Pesquisa Mineral',
          descricao: 'Documentação para obtenção de alvará de pesquisa junto à ANM.',
          imagem: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80'
        },
        {
          id: 16,
          titulo: 'Estudo de Viabilidade Econômica',
          descricao: 'Análise aprofundada da rentabilidade do empreendimento mineral.',
          imagem: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
        }
      ]
    },
    {
      id: 'geotecnia',
      titulo: 'Geotecnia',
      servicos: [
        {
          id: 17,
          titulo: 'Estudo de Taludes',
          descricao: 'Análise de estabilidade de taludes em minas e cavas com recomendações de contenção.',
          imagem: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80'
        },
        {
          id: 18,
          titulo: 'Ensaios Geotécnicos',
          descricao: 'Testes laboratoriais para determinação de parâmetros de solos e rochas.',
          imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80'
        },
        {
          id: 19,
          titulo: 'Mapeamento Geotécnico/RMRQ',
          descricao: 'Classificação geomecânica de maciços rochosos para projetos de escavação.',
          imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80'
        },
        {
          id: 20,
          titulo: 'Laudo Geotécnico',
          descricao: 'Parecer técnico sobre condições de fundações e estabilidade de terreno.',
          imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
        }
      ]
    },
    {
      id: 'licenciamento',
      titulo: 'Licenciamento Ambiental',
      servicos: [
        {
          id: 21,
          titulo: 'Projeto Básico do Empreendimento',
          descricao: 'Projeto conceitual com caracterização de atividades e processos produtivos.',
          imagem: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
        },
        {
          id: 22,
          titulo: 'Roteiro de Caracterização do Empreendimento',
          descricao: 'Documento técnico para instrução de processos de licenciamento ambiental.',
          imagem: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80'
        },
        {
          id: 23,
          titulo: 'Autorização de Supressão de Vegetação',
          descricao: 'Processo para obtenção de autorização legal para remoção de cobertura vegetal.',
          imagem: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80'
        },
        {
          id: 24,
          titulo: 'Intervenção em Área de Preservação Permanente',
          descricao: 'Regularização ambiental para obras em APP com estudos de impacto.',
          imagem: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80'
        },
        {
          id: 25,
          titulo: 'Plano de Gerenciamento de Resíduos Sólidos',
          descricao: 'Estratégias para manejo e disposição final de resíduos sólidos.',
          imagem: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80'
        },
        {
          id: 26,
          titulo: 'Programa de Educação Ambiental',
          descricao: 'Ações educativas sobre conservação ambiental e boas práticas.',
          imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80'
        },
        {
          id: 27,
          titulo: 'Plano de Emergência Ambiental',
          descricao: 'Procedimentos para resposta rápida a acidentes ambientais.',
          imagem: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80'
        }
      ]
    },
    {
      id: 'imobiliarios',
      titulo: 'Empreendimentos Imobiliários',
      servicos: [
        {
          id: 28,
          titulo: 'Assessoria de Venda e Compra de Mina',
          descricao: 'Suporte especializado em transações de compra e venda de direitos minerários.',
          imagem: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
        }
      ]
    }
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      
      {/* Banner da página */}
      <div className="servicos-banner">
        <div className="servicos-banner-bg"></div>
        <div className="servicos-banner-overlay"></div>
        <div className="servicos-banner-content">
          <div className="servicos-container">
            <h1>Nossos <span>Serviços</span></h1>
            <p>Soluções completas em mineração, geologia e meio ambiente</p>
          </div>
        </div>
      </div>

      {/* Seção principal */}
      <section className="servicos-section">
        <div className="servicos-container">
          
          {/* Navegação rápida por categorias */}
          <div className="categorias-nav">
            {categorias.map((categoria) => (
              <a 
                key={categoria.id}
                href={`#${categoria.id}`}
                className="categoria-link"
              >
                {categoria.titulo}
              </a>
            ))}
          </div>

          {/* Lista de categorias com serviços */}
          {categorias.map((categoria) => (
            <div key={categoria.id} id={categoria.id} className="categoria-section">
              <h2 className="categoria-titulo">
                {categoria.titulo}
              </h2>
              
              <div className="servicos-grid">
                {categoria.servicos.map((servico) => (
                  <div key={servico.id} className="servico-card">
                    <div className="servico-img">
                      <img src={servico.imagem} alt={servico.titulo} loading="lazy" />
                      <div className="servico-img-overlay"></div>
                    </div>
                    
                    <div className="servico-content">
                      <h3>{servico.titulo}</h3>
                      <p>{servico.descricao}</p>
                      
                      <button 
                        className="servico-btn"
                        onClick={() => navigate('/solicitacao', { state: { servicoTitulo: servico.titulo } })}
                        >
                        Solicitar Serviço
                        <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Breadcrumbs */}
          <div className="servicos-breadcrumbs">
            <ul className="breadcrumbs-list">
              <li className="breadcrumbs-item">
                <Link to="/" className="breadcrumbs-link">Home</Link>
              </li>
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-separator">|</span>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/sobre" className="breadcrumbs-link">Sobre</Link>
              </li>
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-separator">|</span>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/servicos" className="breadcrumbs-link active">Serviços</Link>
              </li>
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-separator">|</span>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/mineral" className="breadcrumbs-link">Mineral</Link>
              </li>
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-separator">|</span>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/meio-ambiente" className="breadcrumbs-link">Meio Ambiente</Link>
              </li>
              <li className="breadcrumbs-item">
                <span className="breadcrumbs-separator">|</span>
              </li>
              <li className="breadcrumbs-item">
                <Link to="/contato" className="breadcrumbs-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default Servicos;