import React from 'react';

const Pergunta = ({ numero, texto, opcao, onResposta }) => {
  return (
    <div>
      <h2>Pergunta {numero}</h2>
      <p>{texto}</p>
      <p>{opcao}</p>
      <input type="text" onChange={(e) => onResposta(e.target.value)} />
    </div>
  );
};

export default Pergunta;
