import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MessageProvider } from './context/MessageContext';
import Home from './pages/Home';
import Mineral from './pages/Mineral';
import Servicos from './pages/Servicos';
import SolicitacaoServico from './pages/SolicitacaoServico';


function App() {
  return (
    <MessageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mineral" element={<Mineral />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/solicitacao" element={<SolicitacaoServico />} />
      </Routes>
    </MessageProvider>
  );
}

export default App;