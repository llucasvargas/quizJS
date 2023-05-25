import React, { useState } from 'react';
import Pergunta from './pergunta/pergunta';

const Quiz = () => {
  const [respostas, setRespostas] = useState([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [tentativa, setTentativa] = useState(1);
  const [respostaAtual, setRespostaAtual] = useState('');

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

    const respostasCorretas = [
        {id: 1, resposta:'Resposta correta: c) Uma sequência de instruções para resolver um problema', opcao: 'c'},
        {id: 2, resposta:'Resposta correta: c) Um local de armazenamento para dados.', opcao: 'c'},
        {id: 3, resposta:'Resposta correta: d) Uma estrutura de controle para repetir um bloco de código.', opcao: 'd'},
        {id: 4, resposta:'Resposta correta: d) Uma estrutura de controle que permite tomar decisões com base em condições.', opcao: 'd'},
        {id: 5, resposta:'Resposta correta: d) Um bloco de código nomeado que executa uma tarefa específica.', opcao: 'd'},
        {id: 6, resposta:'Resposta correta: a) Uma função que chama a si mesma.', opcao: 'a'},
        {id: 7, resposta:'Resposta correta: b) Uma forma de armazenar dados na memória.', opcao: 'b'},
        {id: 8, resposta:'Resposta correta: c) Uma estrutura condicional.', opcao: 'c'},
        {id: 9, resposta:'Resposta correta: c) A quantidade de recursos que um algoritmo consome.', opcao: 'c'},
        {id: 10, resposta:'Resposta correta: c) A execução passo a passo do código para encontrar e corrigir erros.', opcao: 'c'}
    ]

    const calcularPontuacaoTotal = () => {
        let pontuacaoTotal = 0;
        respostas.forEach((resposta) => {
          pontuacaoTotal += resposta.pontuacao;
        });
        return pontuacaoTotal;
      };
    
      const limparRespostaAtual = () => {
        setRespostaAtual('');
      };
    
      const responder = (resposta) => {
        const respostaCorreta = respostasCorretas[perguntaAtual].resposta;
        let pontuacao = 0;
    
        if (resposta === respostaCorreta) {
          if (tentativa === 1) {
            pontuacao += 10;
            console.log('\nResposta Certa!!\n');
          } else {
            pontuacao = 5;
          }
        } else {
          console.log('Resposta incorreta! Tente novamente.');
        }
    
        const respostaObj = {
          resposta,
          pontuacao,
          respostaCorreta,
        };
    
        setRespostas([...respostas, respostaObj]);
        limparRespostaAtual();
    
        if (resposta === respostaCorreta || tentativa === 2) {
          setTentativa(1);
          setPerguntaAtual(perguntaAtual + 1);
        } else {
          setTentativa(tentativa + 1);
        }
      };
    
      const renderizarPergunta = () => {
        const pergunta = perguntas[perguntaAtual];
        const opcoesPergunta = opcoes[perguntaAtual].opcao;
      
        return (
          <Pergunta
            numero={pergunta.id}
            pergunta={pergunta.pergunta}
            opcoes={opcoesPergunta}
            onResposta={responder}
            respostaAtual={respostaAtual}
            onRespostaChange={(event) => setRespostaAtual(event.target.value)}
          />
        );
      };
      
      return (
        <div>
          {perguntaAtual < perguntas.length ? (
            renderizarPergunta()
          ) : (
            <div>
              <h2>Quiz finalizado!</h2>
              <p>Pontuação total: {calcularPontuacaoTotal()}</p>
              <h3>Respostas corretas: {respostas.filter((resposta) => resposta.pontuacao > 0).length}</h3>
            </div>
          )}
        </div>
      );
    }
    
    export default Quiz;