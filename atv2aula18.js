import React, { useState } from 'react';

const BotaoAlternador = () => {
  const [ligado, setLigado] = useState(false);

  const alternarEstado = () => {
    setLigado(!ligado);
  };

  return (
    <button 
      onClick={alternarEstado} 
      style={{
        backgroundColor: ligado ? 'green' : 'red', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {ligado ? 'Ligado' : 'Desligado'}
    </button>
  );
};

export default BotaoAlternador;
