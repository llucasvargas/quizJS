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
      id: 1, opcao:
        `a) Uma linguagem de programação.
        b) Um tipo de dado.
        c) Uma sequência de instruções para resolver um problema.
        d) Um erro no código`
    },
    {
      id: 2, opcao:
        `a) Um resultado de uma expressão matemática.
        b) Um laço de repetição.
        c) Um local de armazenamento para dados.
        d) Uma função pré-definida.`
    },
    {
      id: 3, opcao:
        `a) Uma estrutura condicional.
        b) Uma função que retorna um valor.
        c) Um tipo de dado.
        d) Uma estrutura de controle para repetir um bloco de código.`
    },
    {
      id: 4, opcao:
        `a) Uma forma de declarar uma variável.
        b) Um tipo de dado numérico.
        c) Um bloco de código executado várias vezes.
        d) Uma estrutura de controle que permite tomar decisões com base em condições.`
    },
    {
      id: 5, opcao:
        `a) Um operador matemático.
        b) Um tipo de dado.
        c) Uma estrutura de controle para repetição.
        d) Um bloco de código nomeado que executa uma tarefa específica.`
    },
    {
      id: 6, opcao:
        `a) Uma função que chama a si mesma.
        b) Um tipo de erro de sintaxe.
        c) Uma estrutura de controle condicional.
        d) Uma declaração para sair de um loop.`
    },
    {
      id: 7, opcao:
        `a) Um tipo de dado numérico.
        b) Uma estrutura para armazenar dados de forma organizada.
        c) Um operador de comparação.
        d) Uma função pré-definida.`
    },
    {
      id: 8, opcao:
        `a) Uma estrutura de dados para armazenar múltiplos valores.
        b) Um operador de comparação.
        c) Uma declaração para sair de um loop.
        d) Uma função que retorna um valor.`
    },
    {
      id: 9, opcao:
        `a) A quantidade de memória utilizada por um programa.
        b) O número de linhas de código em um programa.
        c) A velocidade de execução de um programa.
        d) A quantidade de operações executadas por um algoritmo em relação ao tamanho dos dados de entrada.`
    },
    {
      id: 10, opcao:
        `a) Um processo de otimização de código.
        b) Um método para verificar a validade de um algoritmo.
        c) Uma técnica de programação orientada a objetos.
        d) Um processo de identificar e corrigir erros em um programa.`
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
  const [segundaResposta, setSegundaResposta] = useState('');
  const [mostrarSegundaPergunta, setMostrarSegundaPergunta] = useState(false);

  const handleRespostaChange = (event) => {
  setResposta(event.target.value);
  };

  const handleSegundaRespostaChange = (event) => {
  setSegundaResposta(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (resposta === respostas[numeroQuestao - 1].opcao) {
      setPontuacaoTotal(pontuacaoTotal + 10);
      setAcertos(acertos + 1);
      setNumeroQuestao(numeroQuestao + 1);
      setMostrarSegundaPergunta(false);
    } else {
      setErros(erros + 1);
      setMostrarSegundaPergunta(true);
  
      waitForSecondAnswer((isCorrect) => {
        if (isCorrect) {
          setNumeroQuestao(numeroQuestao + 1);
          setPontuacaoTotal(pontuacaoTotal + 5);
          setMostrarSegundaPergunta(false);
        } else {
          setErros(erros + 1);
          setMostrarSegundaPergunta(false)
        }
      });
    }
    setResposta('')
    setSegundaResposta('')
  };
  
  const waitForSecondAnswer = (callback) => {
    const checkAnswerInterval = setInterval(() => {
      if (segundaResposta === respostas[numeroQuestao - 1].opcao) {
        clearInterval(checkAnswerInterval);
        callback(true);
        setMostrarSegundaPergunta(false);
      }
    }, 100);
  };

  return (
  <div>
    {numeroQuestao <= perguntas.length ? (
      <form onSubmit={handleFormSubmit}>
        <h1>Quiz Lógica de Programação e Algoritmo</h1>
        <h2>Pergunta {numeroQuestao}</h2>
        <p>{perguntas[numeroQuestao - 1].pergunta}</p>
        <p>{opcoes[numeroQuestao - 1].opcao}</p>
        <label htmlFor="resposta">Digite uma opção:</label>
        <input
          type="text"
          id="resposta"
          value={resposta}
          onChange={handleRespostaChange}
        />
        {mostrarSegundaPergunta && (
          <>
            <h3>Tente novamente! Vale 5 pontos.</h3>
            <p>{perguntas[numeroQuestao - 1].pergunta}</p>
            <p>{opcoes[numeroQuestao - 1].opcao}</p>
            <label htmlFor="segundaResposta">Digite uma opção:</label>
            <input
              type="text"
              id="segundaResposta"
              value={segundaResposta}
              onChange={handleSegundaRespostaChange}
            />
          </>
        )}
        <button type="submit">Enviar</button>
      </form>
    ) : (
      <div>
        <h1>Resultado do Quiz</h1>
        <p>Pontuação: {pontuacaoTotal}</p>
        <p>Você acertou: {acertos} vezes e errou: {erros} vezes.</p>
      </div>
    )}
  </div>
  );
};

export default Pergunta;