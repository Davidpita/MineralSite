import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [buttonState, setButtonState] = useState({ text: 'Enviar Mensagem', icon: 'fa-paper-plane', bg: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonState({ text: 'Mensagem Enviada!', icon: 'fa-check', bg: '#550f2c' });
    setTimeout(() => {
      setButtonState({ text: 'Enviar Mensagem', icon: 'fa-paper-plane', bg: '' });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="sec-hdr center reveal">
          <span className="badge">Entre em Contato</span>
          <div className="divider"></div>
          <h2 className="sec-title">Fale Conosco</h2>
          <p className="sec-desc">Estamos prontos para atender seu projeto com excelência.</p>
        </div>
        <div className="contact-wrap">
          <div className="cform reveal">
            <h3>Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="frow">
                <div className="fg">
                  <label>Nome Completo</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Seu nome" />
                </div>
                <div className="fg">
                  <label>E-mail</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" />
                </div>
              </div>
              <div className="frow">
                <div className="fg">
                  <label>Telefone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(00) 00000-0000" />
                </div>
                <div className="fg">
                  <label>Serviço de Interesse</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    <option>Mineral / Minério</option>
                    <option>Mineração</option>
                    <option>Geologia / Geotecnia</option>
                    <option>Licenciamento Ambiental</option>
                    <option>Meio Ambiente</option>
                    <option>Empreendimentos Imobiliários</option>
                  </select>
                </div>
              </div>
              <div className="fg">
                <label>Mensagem</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Conte-nos sobre seu projeto..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '15px', background: buttonState.bg }}>
                {buttonState.text} <i className={`fas ${buttonState.icon}`}></i>
              </button>
            </form>
          </div>
          <div className="cinfo reveal" style={{ transitionDelay: '.15s' }}>
            <h3>Informações de Contato</h3>
            <p>Localizados em Salvador, Bahia. Entre em contato pelo canal de sua preferência.</p>
            <div className="ci">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Endereço</h4>
                <p>Av. Tancredo Neves, 274 — Centro Empresarial Iguatemi<br />Bloco B, Sala 204 — Caminho das Árvores<br />CEP: 41.820-020 — Salvador, BA</p>
              </div>
            </div>
            <div className="ci">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Telefone</h4>
                <p>71 99254-3427</p>
              </div>
            </div>
            <div className="ci">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>E-mail</h4>
                <p>contatomineralemineracao@gmail.com</p>
              </div>
            </div>
            <div className="ci">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta: 08:00 – 18:00<br />Sábado: 08:00 – 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;