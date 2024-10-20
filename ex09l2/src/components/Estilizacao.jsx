import React from 'react';

const Estilizacao = () => {
  const estilosDiv = {
    backgroundColor: '#4CA887',
    color: 'white',
    padding: '20px',
    margin: '20px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  return (
    <div style={estilosDiv}>
      <h1>Bem-vindo ao meu site!</h1>
      <p>Esta é uma div estilizada com estilo inline.</p>
    </div>
  );
};

export default Estilizacao;
