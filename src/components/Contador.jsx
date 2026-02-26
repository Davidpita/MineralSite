import React, { useState } from 'react';

const Contador = ({ min = 0, max = 20 }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < max) {
      setContador(prev => prev + 1);
    }
  };

  const decrementar = () => {
    if (contador > min) {
      setContador(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-lg text-center font-sans">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">{contador}</h1>

      <div className="flex justify-center gap-4 mb-3">
        <button 
          onClick={incrementar}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
        >
          Incrementar
        </button>

        <button 
          onClick={decrementar}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
        >
          Decrementar
        </button>
      </div>

      {/* Mensagem dinâmica */}
      {contador === max && (
        <p className="text-green-600 font-semibold">Você chegou ao valor máximo!</p>
      )}
      {contador === min && (
        <p className="text-red-600 font-semibold">Você chegou ao valor mínimo!</p>
      )}
    </div>
  );
};

export default Contador;