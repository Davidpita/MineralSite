import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop'; 
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const SolicitacaoServico = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { servicoTitulo } = location.state || {};

  // Lista completa de serviços
  const todosServicos = [
    'Descrições Avaliativa de Materiais',
    'Laudo Petrográfico',
    'Laudo Mineralógico',
    'Parecer Técnico de Gemas',
    'Pesquisa Mineral',
    'Cubagem de Jazida',
    'Parecer Técnico',
    'Mapeamento Geológico',
    'Mapeamento Topográfico',
    'Plano de Aproveitamento Econômico',
    'Plano de Fechamento de Mina',
    'Plano de Lavra',
    'Relatório Final de Pesquisa',
    'Relatório Parcial de Pesquisa',
    'Requerimento de Pesquisa Mineral',
    'Estudo de Viabilidade Econômica',
    'Estudo de Taludes',
    'Ensaios Geotécnicos',
    'Mapeamento Geotécnico/RMRQ',
    'Laudo Geotécnico',
    'Projeto Básico do Empreendimento',
    'Roteiro de Caracterização do Empreendimento',
    'Autorização de Supressão de Vegetação',
    'Intervenção em Área de Preservação Permanente',
    'Plano de Gerenciamento de Resíduos Sólidos',
    'Programa de Educação Ambiental',
    'Plano de Emergência Ambiental',
    'Assessoria de Venda e Compra de Mina'
  ];

  // Estado do formulário
  const [formData, setFormData] = useState({
    data: {
      day: new Date().getDate().toString().padStart(2, '0'),
      month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
      year: new Date().getFullYear().toString()
    },
    responsavel: {
      nome: '',
      cargo: '',
      email: '',
      telefone: '',
      empresa: ''
    },
    solicitante: {
      nome: '',
      cpf_cnpj: '',
      email: '',
      pessoa_contato: '',
      endereco: '',
      telefone: '',
      cidade_estado: ''
    },
    servicos: todosServicos.reduce((acc, servico) => {
      acc[servico] = servico === servicoTitulo;
      return acc;
    }, {}),
    outros: ''
  });

  // Estado para controlar a data local das assinaturas
  const [dataAssinatura, setDataAssinatura] = useState({
    day: '',
    month: ''
  });

  // Atualizar data
  const handleDataChange = (field, value) => {
    // Permitir apenas números
    if (!/^\d*$/.test(value)) return;
    
    setFormData(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value }
    }));
  };

  // Atualizar responsável
  const handleResponsavelChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      responsavel: { ...prev.responsavel, [field]: value }
    }));
  };

  // Atualizar solicitante
  const handleSolicitanteChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      solicitante: { ...prev.solicitante, [field]: value }
    }));
  };

  // Atualizar serviços
  const handleServicoChange = (servico) => {
    setFormData(prev => ({
      ...prev,
      servicos: { ...prev.servicos, [servico]: !prev.servicos[servico] }
    }));
  };

  // Validar formulário antes de gerar PDF
  const validarFormulario = () => {
    if (!formData.responsavel.nome || !formData.solicitante.nome) {
      alert('Por favor, preencha o nome do responsável e do solicitante');
      return false;
    }
    
    const temServicoSelecionado = Object.values(formData.servicos).some(v => v === true);
    if (!temServicoSelecionado && !formData.outros) {
      alert('Selecione pelo menos um serviço');
      return false;
    }
    
    return true;
  };

  // Gerar PDF
  const gerarPDF = () => {
    if (!validarFormulario()) return;
    
    const doc = new jsPDF();
    
    // Configurações iniciais
    doc.setFont('helvetica', 'normal');
    
    // Logo e título
    doc.setFillColor(122, 30, 66);
    doc.rect(10, 10, 190, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('FICHA DE SOLICITAÇÃO', 105, 18, { align: 'center' });
    
    // Data
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('DATA:', 10, 30);
    doc.setFont('helvetica', 'normal');
    doc.text(`${formData.data.day}/${formData.data.month}/${formData.data.year}`, 40, 30);
    
    // Dados do Responsável
    let yPos = 40;
    
    // Título Responsável
    doc.setFillColor(122, 30, 66);
    doc.rect(10, yPos, 190, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('DADOS DO RESPONSÁVEL / SERVIÇOS', 14, yPos + 5.5);
    yPos += 12;
    
    // Campos do Responsável
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    
    const responsavelCampos = [
      { label: 'Nome:', value: formData.responsavel.nome },
      { label: 'Cargo:', value: formData.responsavel.cargo },
      { label: 'Email:', value: formData.responsavel.email },
      { label: 'Telefone:', value: formData.responsavel.telefone },
      { label: 'Empresa:', value: formData.responsavel.empresa }
    ];
    
    responsavelCampos.forEach(campo => {
      doc.text(campo.label, 14, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(campo.value || '-', 50, yPos);
      doc.setFont('helvetica', 'bold');
      yPos += 7;
    });
    
    yPos += 5;
    
    // Dados do Solicitante
    doc.setFillColor(122, 30, 66);
    doc.rect(10, yPos, 190, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('DADOS DO SOLICITANTE / EMPRESA', 14, yPos + 5.5);
    yPos += 12;
    
    // Campos do Solicitante
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    
    const solicitanteCampos = [
      { label: 'Nome:', value: formData.solicitante.nome },
      { label: 'CPF/CNPJ:', value: formData.solicitante.cpf_cnpj },
      { label: 'Email:', value: formData.solicitante.email },
      { label: 'Pessoa Contato:', value: formData.solicitante.pessoa_contato },
      { label: 'Endereço:', value: formData.solicitante.endereco },
      { label: 'Telefone:', value: formData.solicitante.telefone },
      { label: 'Cidade/Estado:', value: formData.solicitante.cidade_estado }
    ];
    
    solicitanteCampos.forEach(campo => {
      doc.text(campo.label, 14, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(campo.value || '-', 60, yPos);
      doc.setFont('helvetica', 'bold');
      yPos += 7;
    });
    
    yPos += 5;
    
    // Serviços
    doc.setFillColor(122, 30, 66);
    doc.rect(10, yPos, 190, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text('SERVIÇOS', 14, yPos + 5.5);
    yPos += 12;
    
    // Lista de serviços em 3 colunas
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    
    const servicosSelecionados = Object.entries(formData.servicos)
      .filter(([_, selecionado]) => selecionado)
      .map(([servico]) => servico);
    
    // Dividir em 3 colunas
    const col1 = servicosSelecionados.filter((_, i) => i % 3 === 0);
    const col2 = servicosSelecionados.filter((_, i) => i % 3 === 1);
    const col3 = servicosSelecionados.filter((_, i) => i % 3 === 2);
    
    const maxLinhas = Math.max(col1.length, col2.length, col3.length);
    
    for (let i = 0; i < maxLinhas; i++) {
      if (i < col1.length) {
        doc.text(`• ${col1[i]}`, 14, yPos + (i * 5));
      }
      if (i < col2.length) {
        doc.text(`• ${col2[i]}`, 80, yPos + (i * 5));
      }
      if (i < col3.length) {
        doc.text(`• ${col3[i]}`, 146, yPos + (i * 5));
      }
    }
    
    yPos += (maxLinhas * 5) + 10;
    
    // Outros
    if (formData.outros) {
      doc.setFont('helvetica', 'bold');
      doc.text('Outros:', 14, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(formData.outros, 40, yPos);
      yPos += 10;
    }
    
    yPos += 10;
    
    // Local e data
    const dataAssinaturaCompleta = dataAssinatura.day && dataAssinatura.month 
      ? `${dataAssinatura.day} / ${dataAssinatura.month} / ${formData.data.year}`
      : `${formData.data.day} / ${formData.data.month} / ${formData.data.year}`;
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Salvador, ${dataAssinaturaCompleta}`, 140, yPos);
    yPos += 15;
    
    // Assinaturas
    doc.line(30, yPos, 80, yPos);
    doc.line(120, yPos, 170, yPos);
    yPos += 5;
    
    doc.setFontSize(9);
    doc.text(formData.solicitante.nome || 'Solicitante', 30, yPos, { align: 'left' });
    doc.text(formData.responsavel.nome || 'Responsável', 120, yPos, { align: 'left' });
    
    // Salvar PDF
    doc.save(`solicitacao_${formData.solicitante.nome || 'cliente'}_${Date.now()}.pdf`);
  };

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="solicitacao-container">
        <div className="solicitacao-card">
          <div className="solicitacao-header">
            <img src="/img/Captura de tela 2026-02-12 222040.png" alt="Logo" className="solicitacao-logo" />
            <h1>FICHA DE SOLICITAÇÃO</h1>
          </div>

          <div className="solicitacao-section">
            <h2>DADOS DO RESPONSÁVEL / SERVIÇOS</h2>
            
            <div className="solicitacao-data">
              <label>DATA:</label>
              <div className="data-inputs">
                <input 
                  type="text" 
                  maxLength="2" 
                  value={formData.data.day}
                  onChange={(e) => handleDataChange('day', e.target.value)}
                  placeholder="dd"
                />
                <span>/</span>
                <input 
                  type="text" 
                  maxLength="2" 
                  value={formData.data.month}
                  onChange={(e) => handleDataChange('month', e.target.value)}
                  placeholder="mm"
                />
                <span>/</span>
                <input 
                  type="text" 
                  maxLength="4" 
                  value={formData.data.year}
                  onChange={(e) => handleDataChange('year', e.target.value)}
                  placeholder="aaaa"
                />
              </div>
            </div>

            <div className="solicitacao-campos">
              <div className="campo">
                <label>Nome:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.nome}
                  onChange={(e) => handleResponsavelChange('nome', e.target.value)}
                  placeholder="Digite o nome do responsável"
                />
              </div>
              <div className="campo">
                <label>Cargo:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.cargo}
                  onChange={(e) => handleResponsavelChange('cargo', e.target.value)}
                  placeholder="Digite o cargo"
                />
              </div>
              <div className="campo">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={formData.responsavel.email}
                  onChange={(e) => handleResponsavelChange('email', e.target.value)}
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="campo">
                <label>Telefone:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.telefone}
                  onChange={(e) => handleResponsavelChange('telefone', e.target.value)}
                  placeholder="(71) 99999-9999"
                />
              </div>
              <div className="campo">
                <label>Empresa:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.empresa}
                  onChange={(e) => handleResponsavelChange('empresa', e.target.value)}
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
          </div>

          <div className="solicitacao-section">
            <h2>DADOS DO SOLICITANTE / EMPRESA</h2>
            <div className="solicitacao-campos">
              <div className="campo">
                <label>Nome:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.nome}
                  onChange={(e) => handleSolicitanteChange('nome', e.target.value)}
                  placeholder="Nome completo"
                />
              </div>
              <div className="campo">
                <label>CPF/CNPJ:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.cpf_cnpj}
                  onChange={(e) => handleSolicitanteChange('cpf_cnpj', e.target.value)}
                  placeholder="000.000.000-00"
                />
              </div>
              <div className="campo">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={formData.solicitante.email}
                  onChange={(e) => handleSolicitanteChange('email', e.target.value)}
                  placeholder="email@exemplo.com"
                />
              </div>
              <div className="campo">
                <label>Pessoa Contato:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.pessoa_contato}
                  onChange={(e) => handleSolicitanteChange('pessoa_contato', e.target.value)}
                  placeholder="Nome para contato"
                />
              </div>
              <div className="campo">
                <label>Endereço:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.endereco}
                  onChange={(e) => handleSolicitanteChange('endereco', e.target.value)}
                  placeholder="Rua, número, bairro"
                />
              </div>
              <div className="campo">
                <label>Telefone:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.telefone}
                  onChange={(e) => handleSolicitanteChange('telefone', e.target.value)}
                  placeholder="(71) 99999-9999"
                />
              </div>
              <div className="campo">
                <label>Cidade/Estado:</label>
                <input 
                  type="text" 
                  value={formData.solicitante.cidade_estado}
                  onChange={(e) => handleSolicitanteChange('cidade_estado', e.target.value)}
                  placeholder="Salvador, BA"
                />
              </div>
            </div>
          </div>

          <div className="solicitacao-section">
            <h2>SERVIÇOS</h2>
            <div className="servicos-grid">
              {todosServicos.map((servico, index) => (
                <div key={index} className="servico-checkbox">
                  <input 
                    type="checkbox" 
                    id={`servico-${index}`}
                    checked={formData.servicos[servico]}
                    onChange={() => handleServicoChange(servico)}
                  />
                  <label htmlFor={`servico-${index}`}>{servico}</label>
                </div>
              ))}
            </div>

            <div className="campo outros">
              <label>Outros:</label>
              <input 
                type="text" 
                value={formData.outros}
                onChange={(e) => setFormData(prev => ({ ...prev, outros: e.target.value }))}
                placeholder="Especifique outros serviços..."
              />
            </div>
          </div>

          <div className="solicitacao-assinaturas">
            <div className="data-local">
              <label>Salvador,</label>
              <input 
                type="text" 
                maxLength="2" 
                placeholder="dd"
                value={dataAssinatura.day}
                onChange={(e) => setDataAssinatura({...dataAssinatura, day: e.target.value})}
              />
              <span>/</span>
              <input 
                type="text" 
                maxLength="2" 
                placeholder="mm"
                value={dataAssinatura.month}
                onChange={(e) => setDataAssinatura({...dataAssinatura, month: e.target.value})}
              />
              <span>/</span>
              <input type="text" maxLength="4" value={formData.data.year} readOnly />
            </div>

            <div className="assinaturas">
              <div className="assinatura">
                <div className="linha"></div>
                <span>{formData.solicitante.nome || 'Solicitante'}</span>
              </div>
              <div className="assinatura">
                <div className="linha"></div>
                <span>{formData.responsavel.nome || 'Responsável'}</span>
              </div>
            </div>
          </div>

          <div className="solicitacao-actions">
            <button className="btn-voltar" onClick={() => navigate(-1)}>
              <i className="fas fa-arrow-left"></i> Voltar
            </button>
            <button className="btn-download" onClick={gerarPDF}>
              <i className="fas fa-download"></i> Baixar PDF
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default SolicitacaoServico;