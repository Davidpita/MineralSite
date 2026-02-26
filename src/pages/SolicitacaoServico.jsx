import React, { useState } from 'react';
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

  // Função para carregar imagem como base64
  const carregarImagemComoBase64 = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      
      img.onerror = (error) => {
        console.error('Erro ao carregar imagem:', error);
        reject(error);
      };
    });
  };

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

  // Dados fixos do responsável (equipe da Mineral & Mineração)
  const DADOS_RESPONSAVEL_FIXO = {
    nome: 'Zilda Gomes',
    cargo: 'Administradora',
    email: 'contatomineralemineracao@gmail.com',
    telefone: '(71) 99254-3427',
    empresa: 'Mineral & Mineração'
  };

  // Estado do formulário
  const [formData, setFormData] = useState({
    data: {
      day: new Date().getDate().toString().padStart(2, '0'),
      month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
      year: new Date().getFullYear().toString()
    },
    responsavel: DADOS_RESPONSAVEL_FIXO,
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

  const [enviando, setEnviando] = useState(false);

  // Atualizar data
  const handleDataChange = (field, value) => {
    if (!/^\d*$/.test(value)) return;
    setFormData(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value }
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

  // Obter lista de serviços selecionados
  const getServicosSelecionados = () => {
    const selecionados = Object.entries(formData.servicos)
      .filter(([_, selecionado]) => selecionado)
      .map(([servico]) => servico);
    
    if (formData.outros) {
      selecionados.push(`Outros: ${formData.outros}`);
    }
    
    return selecionados;
  };

  // Validar formulário
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

  // =====================================================
  // FUNÇÃO gerarPDF v3 — Logo proporcional + Header refinado
  // =====================================================
  const gerarPDF = async () => {
    if (!validarFormulario()) return;
    
    setEnviando(true);
    
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const PAGE_W = 210;
      const PAGE_H = 297;
      const MARGIN = 14;
      const CONTENT_W = PAGE_W - MARGIN * 2;

      const C = {
        vinho:       [122, 30, 66],
        vinhoEscuro: [90, 18, 46],
        rosa:        [184, 80, 112],
        rosaClaro:   [240, 210, 220],
        dourado:     [196, 155, 80],
        branco:      [255, 255, 255],
        cinzaEscuro: [40, 40, 44],
        cinzaMedio:  [100, 95, 100],
        cinzaClaro:  [225, 220, 225],
        fundoSec:    [252, 248, 250],
      };

      const setFill  = (rgb) => doc.setFillColor(...rgb);
      const setDraw  = (rgb) => doc.setDrawColor(...rgb);
      const setColor = (rgb) => doc.setTextColor(...rgb);

      const roundedRect = (x, y, w, h, fillColor, strokeColor = null, lw = 0.3) => {
        setFill(fillColor);
        doc.rect(x, y, w, h, strokeColor ? 'FD' : 'F');
        if (strokeColor) {
          setDraw(strokeColor);
          doc.setLineWidth(lw);
          doc.rect(x, y, w, h, 'S');
        }
      };

      const hr = (y, x1, x2, color, lw = 0.4) => {
        setDraw(color);
        doc.setLineWidth(lw);
        doc.line(x1, y, x2, y);
      };

      const drawField = (label, value, x, y, labelW = 48) => {
        doc.setFont('times', 'italic');
        doc.setFontSize(8.5);
        setColor(C.cinzaMedio);
        doc.text(label, x, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        setColor(C.cinzaEscuro);
        doc.text(value || '—', x + labelW, y);
      };

      // =============================================
      // CABEÇALHO — compacto e limpo
      // =============================================
      const HEADER_H = 24;

      setFill(C.vinhoEscuro);
      doc.rect(0, 0, PAGE_W, HEADER_H, 'F');

      setFill(C.dourado);
      doc.rect(0, HEADER_H - 0.8, PAGE_W, 0.8, 'F');

      // ===== LOGOTIPO — 16x16mm, discreto =====
      const LOGO_SIZE = 16;
      const LOGO_X = 6;
      const LOGO_Y = (HEADER_H - LOGO_SIZE) / 2;

      try {
        const logoBase64 = await carregarImagemComoBase64('/img/Captura de tela 2026-02-12 222040.png');
        doc.addImage(logoBase64, 'PNG', LOGO_X, LOGO_Y, LOGO_SIZE, LOGO_SIZE);
      } catch {
        setFill(C.rosa);
        doc.rect(LOGO_X, LOGO_Y, LOGO_SIZE, LOGO_SIZE, 'F');
        setColor(C.branco);
        doc.setFont('times', 'bold');
        doc.setFontSize(9);
        doc.text('M&M', LOGO_X + LOGO_SIZE / 2, LOGO_Y + LOGO_SIZE / 2 + 2, { align: 'center' });
      }

      // Linha vertical separadora
      setDraw([155, 75, 108]);
      doc.setLineWidth(0.3);
      doc.line(LOGO_X + LOGO_SIZE + 5, 5, LOGO_X + LOGO_SIZE + 5, HEADER_H - 5);

      // ===== TEXTO DO HEADER =====
      const TEXT_X = LOGO_X + LOGO_SIZE + 10;

      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(14);
      doc.text('MINERAL & MINERAÇÃO', TEXT_X, 10.5);

      setColor([210, 185, 200]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.text('Consultoria Especializada em Mineração e Meio Ambiente', TEXT_X, 16);

      setColor([175, 150, 165]);
      doc.setFont('times', 'italic');
      doc.setFontSize(7);
      doc.text('contatomineralemineracao@gmail.com  |  (71) 99254-3427', TEXT_X, 21);

      // =============================================
      // FAIXA TÍTULO
      // =============================================
      setFill(C.rosa);
      doc.rect(0, HEADER_H + 0.8, PAGE_W, 10, 'F');

      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(12);
      doc.text('FICHA DE SOLICITAÇÃO DE SERVIÇOS', PAGE_W / 2, HEADER_H + 7.5, { align: 'center' });

      // Badge data
      const dataStr = `${formData.data.day}/${formData.data.month}/${formData.data.year}`;
      setFill(C.dourado);
      doc.rect(PAGE_W - MARGIN - 34, HEADER_H + 1.8, 34, 8, 'F');
      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(7);
      doc.text('DATA:', PAGE_W - MARGIN - 31, HEADER_H + 7);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.text(dataStr, PAGE_W - MARGIN - 18, HEADER_H + 7);

      // =============================================
      // SEÇÃO 1 — DADOS DO RESPONSÁVEL
      // =============================================
      let y = HEADER_H + 18;

      setFill(C.vinho);
      doc.rect(MARGIN, y, CONTENT_W, 9, 'F');
      setFill(C.dourado);
      doc.rect(MARGIN, y, 3.5, 9, 'F');
      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      doc.text('1.  DADOS DO RESPONSÁVEL TÉCNICO', MARGIN + 8, y + 6);
      y += 11;

      roundedRect(MARGIN, y, CONTENT_W, 51, C.fundoSec, C.cinzaClaro);
      y += 6;

      const respCampos = [
        { label: 'Nome Completo:',  value: formData.responsavel.nome },
        { label: 'Cargo / Função:', value: formData.responsavel.cargo },
        { label: 'E-mail:',         value: formData.responsavel.email },
        { label: 'Telefone:',       value: formData.responsavel.telefone },
        { label: 'Empresa:',        value: formData.responsavel.empresa },
      ];

      respCampos.forEach((campo, i) => {
        if (i > 0) hr(y - 3.5, MARGIN + 5, PAGE_W - MARGIN - 5, C.cinzaClaro, 0.2);
        drawField(campo.label, campo.value, MARGIN + 7, y);
        y += 10;
      });
      y += 5;

      // =============================================
      // SEÇÃO 2 — DADOS DO SOLICITANTE
      // =============================================
      setFill(C.vinho);
      doc.rect(MARGIN, y, CONTENT_W, 9, 'F');
      setFill(C.rosa);
      doc.rect(MARGIN, y, 3.5, 9, 'F');
      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      doc.text('2.  DADOS DO SOLICITANTE / EMPRESA', MARGIN + 8, y + 6);
      y += 11;

      roundedRect(MARGIN, y, CONTENT_W, 75, C.fundoSec, C.cinzaClaro);
      y += 6;

      const solCampos = [
        { label: 'Nome / Razão Social:',  value: formData.solicitante.nome },
        { label: 'CPF / CNPJ:',          value: formData.solicitante.cpf_cnpj },
        { label: 'E-mail:',               value: formData.solicitante.email },
        { label: 'Pessoa p/ Contato:',    value: formData.solicitante.pessoa_contato },
        { label: 'Endereço Completo:',    value: formData.solicitante.endereco },
        { label: 'Telefone:',             value: formData.solicitante.telefone },
        { label: 'Cidade / UF:',          value: formData.solicitante.cidade_estado },
      ];

      solCampos.forEach((campo, i) => {
        if (i > 0) hr(y - 3.5, MARGIN + 5, PAGE_W - MARGIN - 5, C.cinzaClaro, 0.2);
        drawField(campo.label, campo.value, MARGIN + 7, y);
        y += 10;
      });
      y += 5;

      // =============================================
      // SEÇÃO 3 — SERVIÇOS SOLICITADOS
      // =============================================
      setFill(C.vinho);
      doc.rect(MARGIN, y, CONTENT_W, 9, 'F');
      setFill(C.dourado);
      doc.rect(MARGIN, y, 3.5, 9, 'F');
      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      doc.text('3.  SERVIÇOS SOLICITADOS', MARGIN + 8, y + 6);
      y += 11;

      const servicosSelecionados = getServicosSelecionados();

      if (servicosSelecionados.length === 0) {
        roundedRect(MARGIN, y, CONTENT_W, 14, C.fundoSec, C.cinzaClaro);
        setColor(C.cinzaMedio);
        doc.setFont('times', 'italic');
        doc.setFontSize(9);
        doc.text('Nenhum serviço selecionado.', MARGIN + 7, y + 9);
        y += 16;
      } else {
        const colW = CONTENT_W / 2 - 2;
        const metade = Math.ceil(servicosSelecionados.length / 2);
        const col1 = servicosSelecionados.slice(0, metade);
        const col2 = servicosSelecionados.slice(metade);
        const alturaServicos = metade * 7 + 12;

        roundedRect(MARGIN, y, CONTENT_W, alturaServicos, C.fundoSec, C.cinzaClaro);

        col1.forEach((srv, i) => {
          setFill(C.rosa);
          doc.circle(MARGIN + 8.5, y + 6 + i * 7 - 1.5, 1.3, 'F');
          setColor(C.cinzaEscuro);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.8);
          doc.text(srv, MARGIN + 12, y + 6 + i * 7);
        });

        col2.forEach((srv, i) => {
          setFill(C.rosa);
          doc.circle(MARGIN + 2 + colW + 8.5, y + 6 + i * 7 - 1.5, 1.3, 'F');
          setColor(C.cinzaEscuro);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.8);
          doc.text(srv, MARGIN + 2 + colW + 12, y + 6 + i * 7);
        });

        y += alturaServicos + 4;
      }

      if (formData.outros) {
        roundedRect(MARGIN, y, CONTENT_W, 13, [255, 250, 238], [196, 155, 80], 0.5);
        doc.setFont('times', 'bolditalic');
        doc.setFontSize(9);
        setColor(C.dourado);
        doc.text('Outros:', MARGIN + 7, y + 8.5);
        doc.setFont('helvetica', 'normal');
        setColor(C.cinzaEscuro);
        doc.setFontSize(9);
        doc.text(formData.outros, MARGIN + 24, y + 8.5);
        y += 15;
      }

      y += 5;

      // =============================================
      // SEÇÃO 4 — ASSINATURAS
      // =============================================
      setFill(C.vinho);
      doc.rect(MARGIN, y, CONTENT_W, 9, 'F');
      setFill(C.rosa);
      doc.rect(MARGIN, y, 3.5, 9, 'F');
      setColor(C.branco);
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      doc.text('4.  ASSINATURAS', MARGIN + 8, y + 6);
      y += 13;

      const dataAssinaturaCompleta = dataAssinatura.day && dataAssinatura.month
        ? `${dataAssinatura.day.padStart(2, '0')} / ${dataAssinatura.month.padStart(2, '0')} / ${formData.data.year}`
        : `${formData.data.day} / ${formData.data.month} / ${formData.data.year}`;

      setColor(C.cinzaMedio);
      doc.setFont('times', 'italic');
      doc.setFontSize(9);
      doc.text(`Salvador, ${dataAssinaturaCompleta}`, PAGE_W - MARGIN, y, { align: 'right' });
      y += 10;

      const halfW = CONTENT_W / 2 - 5;

      roundedRect(MARGIN, y, halfW, 30, C.fundoSec, C.cinzaClaro);
      hr(y + 17, MARGIN + 7, MARGIN + halfW - 7, C.vinho, 0.7);
      setColor(C.cinzaMedio);
      doc.setFont('times', 'bold');
      doc.setFontSize(7.5);
      doc.text('ASSINATURA DO SOLICITANTE', MARGIN + halfW / 2, y + 21.5, { align: 'center' });
      setColor(C.cinzaEscuro);
      doc.setFont('times', 'italic');
      doc.setFontSize(9);
      doc.text(formData.solicitante.nome || '________________________', MARGIN + halfW / 2, y + 27, { align: 'center' });

      const rx = MARGIN + halfW + 10;
      roundedRect(rx, y, halfW, 30, C.fundoSec, C.cinzaClaro);
      hr(y + 17, rx + 7, rx + halfW - 7, C.vinho, 0.7);
      setColor(C.cinzaMedio);
      doc.setFont('times', 'bold');
      doc.setFontSize(7.5);
      doc.text('ASSINATURA DO RESPONSÁVEL', rx + halfW / 2, y + 21.5, { align: 'center' });
      setColor(C.cinzaEscuro);
      doc.setFont('times', 'italic');
      doc.setFontSize(9);
      doc.text(formData.responsavel.nome || '________________________', rx + halfW / 2, y + 27, { align: 'center' });

      // =============================================
      // RODAPÉ
      // =============================================
      const footerY = PAGE_H - 16;

      setFill(C.vinhoEscuro);
      doc.rect(0, footerY - 2, PAGE_W, 18, 'F');
      setFill(C.dourado);
      doc.rect(0, footerY - 2, PAGE_W, 1.2, 'F');

      setColor([225, 210, 220]);
      doc.setFont('times', 'italic');
      doc.setFontSize(8);
      doc.text('Mineral & Mineração  —  Consultoria Especializada em Mineração e Meio Ambiente', PAGE_W / 2, footerY + 3.5, { align: 'center' });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      setColor([210, 195, 205]);
      doc.text('contatomineralemineracao@gmail.com  |  (71) 99254-3427', PAGE_W / 2, footerY + 8.5, { align: 'center' });

      setColor([160, 140, 155]);
      doc.setFontSize(6.5);
      doc.text(`Documento gerado em ${new Date().toLocaleString('pt-BR')}`, PAGE_W / 2, footerY + 13.5, { align: 'center' });

      // Salvar o PDF
      doc.save(`solicitacao_${formData.solicitante.nome || 'cliente'}_${Date.now()}.pdf`);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setEnviando(false);
    }
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

          {/* DADOS DO RESPONSÁVEL - AGORA FIXOS */}
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
                  readOnly
                  disabled
                  className="campo-fixo"
                />
              </div>
              <div className="campo">
                <label>Cargo:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.cargo}
                  readOnly
                  disabled
                  className="campo-fixo"
                />
              </div>
              <div className="campo">
                <label>Email:</label>
                <input 
                  type="email" 
                  value={formData.responsavel.email}
                  readOnly
                  disabled
                  className="campo-fixo"
                />
              </div>
              <div className="campo">
                <label>Telefone:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.telefone}
                  readOnly
                  disabled
                  className="campo-fixo"
                />
              </div>
              <div className="campo">
                <label>Empresa:</label>
                <input 
                  type="text" 
                  value={formData.responsavel.empresa}
                  readOnly
                  disabled
                  className="campo-fixo"
                />
              </div>
            </div>
          </div>

          {/* DADOS DO SOLICITANTE */}
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

          {/* SERVIÇOS */}
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

          {/* ASSINATURAS */}
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

          {/* Botões de ação */}
          <div className="solicitacao-actions">
            <button className="btn-voltar" onClick={() => navigate(-1)} disabled={enviando}>
              <i className="fas fa-arrow-left"></i> Voltar
            </button>
            <button 
              className="btn-download" 
              onClick={gerarPDF}
              disabled={enviando}
            >
              {enviando ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Gerando PDF...
                </>
              ) : (
                <>
                  <i className="fas fa-download"></i> Baixar PDF
                </>
              )}
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