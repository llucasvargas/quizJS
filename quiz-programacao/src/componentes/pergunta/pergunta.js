import React from 'react';

const Pergunta = ({ numero, pergunta, opcoes, onResposta, respostaAtual, onRespostaChange }) => {
  return (
    <div>
      <h2>Pergunta {numero}</h2>
      <p>{pergunta}</p>
      <p>{opcoes}</p>
      <input type="text" value={respostaAtual} onChange={handleRespostaChange} />
    </div>
  );
};

export default Pergunta;
