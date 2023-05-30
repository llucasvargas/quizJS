import React, { useState } from 'react';
//import Pergunta from './pergunta/pergunta';

const Pergunta = () => {
  const perguntas = [
    { id: 1, pergunta: 'Pergunta: O que é um algoritmo?' },
    { id: 2, pergunta: 'Pergunta: O que é uma variável em programação?' },
    { id: 3, pergunta: 'Pergunta: O que é um loop em programação?' },
    { id: 4, pergunta: 'Pergunta: O que é uma estrutura condicional em programação?' },
    { id: 5, pergunta: 'Pergunta: O que é uma função em programação?' },
    { id: 6, pergunta: 'Pergunta: O que é a recursão em programação?' },
    { id: 7, pergunta: 'Pergunta: O que é uma estrutura de dados em programação?' },
    { id: 8, pergunta: 'Pergunta: O que é uma declaração de controle de fluxo em programação?' },
    { id: 9, pergunta: 'Pergunta: O que é a complexidade de um algoritmo?' },
    { id: 10, pergunta: 'Pergunta: O que é depuração (debugging) em programação?' }
  ];

  const opcoes = [
    {
      id: 1, opcao1:
        `a) Uma linguagem de programação.`,
        opcao2: `b) Um tipo de dado.`,
        opcao3: `c) Uma sequência de instruções para resolver um problema.`,
        opcao4: `d) Um erro no código`
    },
    {
      id: 2, opcao1:
      `a) Um resultado de uma expressão matemática.`,
      opcao2: `b) Um laço de repetição.`,
      opcao3: `c) Um local de armazenamento para dados.`,
      opcao4: `d) Uma função pré-definida.`
    },
    {
      id: 3, opcao1:
      `a) Uma estrutura condicional.`,
      opcao2: `b) Uma função que retorna um valor.`,
      opcao3: `c) Um tipo de dado.`,
      opcao4: `d) Uma estrutura de controle para repetir um bloco de código.`
    },
    {
      id: 4, opcao1:
      `a) Uma forma de declarar uma variável.`,
      opcao2: `b) Um tipo de dado numérico.`,
      opcao3: `c) Um bloco de código executado várias vezes.`,
      opcao4: `d) Uma estrutura de controle que permite tomar decisões com base em condições.`
    },
    {
      id: 5, opcao1: `a) Um operador matemático.`,
      opcao2: `b) Um tipo de dado.`,
      opcao3: `c) Uma estrutura de controle para repetição.`,
      opcao4: `d) Um bloco de código nomeado que executa uma tarefa específica.`
    },
    {
      id: 6, opcao1: `a) Uma função que chama a si mesma.`,
      opcao2: `b) Um tipo de erro de sintaxe.`,
      opcao3: `c) Uma forma de depuração de código.`,
      opcao4: `d) Um operador de atribuição.`
    },
    {
      id: 7, opcao1: `a) Um formato para impressão de resultados.`,
      opcao2: `b) Uma forma de armazenar dados na memória.`,
      opcao3: `c) Uma função que retorna um valor booleano.`,
      opcao4: `d) Uma operação matemática.`
    },
    {
      id: 8, opcao1: `a) Um comentário no código.`,
      opcao2: `b) Uma forma de dividir o código em blocos.`,
      opcao3: `c) Uma estrutura condicional.`,
      opcao4: `d) Uma operação matemática.`
    },
    {
      id: 9, opcao1: `a) O número de linhas de código em um programa.`,
      opcao2: `b) O tempo necessário para compilar um programa.`,
      opcao3: `c) A quantidade de recursos que um algoritmo consome.`,
      opcao4: `d) O número de funções em um programa.`
    },
    {
      id: 10, opcao1: `a) A otimização de um algoritmo.`,
      opcao2: `b) A documentação de um programa.`,
      opcao3: `c) A execução passo a passo do código para encontrar e corrigir erros.`,
      opcao4: `d) A análise de resultados de um programa.`
    }
  ];

  const respostas = [
      {id: 1, resposta:'Resposta correta: c) Uma sequência de instruções para resolver um problema', opcao: 'c', pontuacao: 10},
      {id: 2, resposta:'Resposta correta: c) Um local de armazenamento para dados.', opcao: 'c', pontuacao: 10},
      {id: 3, resposta:'Resposta correta: d) Uma estrutura de controle para repetir um bloco de código.', opcao: 'd', pontuacao: 10},
      {id: 4, resposta:'Resposta correta: d) Uma estrutura de controle que permite tomar decisões com base em condições.', opcao: 'd', pontuacao: 10},
      {id: 5, resposta:'Resposta correta: d) Um bloco de código nomeado que executa uma tarefa específica.', opcao: 'd', pontuacao: 10},
      {id: 6, resposta:'Resposta correta: a) Uma função que chama a si mesma.', opcao: 'a', pontuacao: 10},
      {id: 7, resposta:'Resposta correta: b) Uma forma de armazenar dados na memória.', opcao: 'b', pontuacao: 10},
      {id: 8, resposta:'Resposta correta: c) Uma estrutura condicional.', opcao: 'c', pontuacao: 10},
      {id: 9, resposta:'Resposta correta: c) A quantidade de recursos que um algoritmo consome.', opcao: 'c', pontuacao: 10},
      {id: 10, resposta:'Resposta correta: c) A execução passo a passo do código para encontrar e corrigir erros.', opcao: 'c', pontuacao: 10}
  ]

  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [numeroQuestao, setNumeroQuestao] = useState(1);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [resposta, setResposta] = useState('');
  //const [segundaResposta, setSegundaResposta] = useState('');
  const [mostrarSegundaPergunta, setMostrarSegundaPergunta] = useState(false);
  //const [rendimento, setRendimento] = useState('')

  const handleRespostaChange = (event) => {
  setResposta(event.target.value);
  };

  //const handleSegundaRespostaChange = (event) => {
  //setSegundaResposta(event.target.value);
  //};

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (resposta.toLowerCase() === respostas[numeroQuestao - 1].opcao) {
      setPontuacaoTotal(pontuacaoTotal + 10);
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
      setMostrarSegundaPergunta(true);
      setResposta('');
      return; // Não continua para a próxima pergunta
    }

    setNumeroQuestao(numeroQuestao + 1);
    setMostrarSegundaPergunta(false);
    setResposta('');
  };
  
  const handleSegundaFormSubmit = (event) => {
    event.preventDefault();

    if (resposta.toLowerCase() === respostas[numeroQuestao - 1].opcao) {
      setPontuacaoTotal(pontuacaoTotal + 5);
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }

    setNumeroQuestao(numeroQuestao + 1);
    setMostrarSegundaPergunta(false);
    setResposta('');
  };

  //const nota = () => {
  //  if (pontuacaoTotal === 100) {
  //    setRendimento('Excelente!')
  //} else if (pontuacaoTotal >= 75) {
  //  setRendimento('Otimo!')
  //} else if (pontuacaoTotal >= 50) {
  //  setRendimento('Bom!')
  //} else if (pontuacaoTotal >= 25) {
  //  setRendimento('Regular!')
  //} else {
  //  setRendimento('Pessimo!')
  //}
  
  //}

  const recarregarPagina = () => {
    window.location.reload();
  }

  function atualiza() {
    recarregarPagina()
  }

  return (
    <div className='container'>
      {numeroQuestao <= perguntas.length ? (
        <form onSubmit={mostrarSegundaPergunta ? handleSegundaFormSubmit : handleFormSubmit}>
          <h1 className='titulo'>Quiz Lógica de Programação e Algoritmo!</h1>
          <h2 className='subTitulo'>Pergunta {numeroQuestao}</h2>
          <p className='pergunta'>{perguntas[numeroQuestao - 1].pergunta}</p>
          <div className='opcoesContainer'>
            <p className='opcoes'>{opcoes[numeroQuestao - 1].opcao1}</p>
            <p className='opcoes'>{opcoes[numeroQuestao - 1].opcao2}</p>
            <p className='opcoes'>{opcoes[numeroQuestao - 1].opcao3}</p>
            <p className='opcoes'>{opcoes[numeroQuestao - 1].opcao4}</p>
          </div>
          <label htmlFor="resposta" className='resposta'>Digite uma opção:</label>
          <input className='input'
            type="text"
            id="resposta"
            value={resposta}
            onChange={handleRespostaChange}
          />
          {mostrarSegundaPergunta && (
            <div>
              <h3 className='subTitulo'>Tente novamente! Vale 5 pontos.</h3>
              <button className='button' type="submit">Responder</button>
            </div>
          )}
          {!mostrarSegundaPergunta && (
            <button className='button' type="submit">Responder</button>
          )}
        </form>
      ) : (
        <div>
          <h1>Resultado do Quiz</h1>
          <p>Pontuação Total: {pontuacaoTotal}</p>
          <p>Acertos: {acertos}</p>
          <p>Erros: {erros}</p>
          <button className='button button_recarrega' onClick={atualiza}>Jogar novamente.</button>
        </div>
      )}
    </div>
  );
};

export default Pergunta;