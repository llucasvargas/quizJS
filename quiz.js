const entradaDados = require('readline-sync')

const perguntas = [
    {id: 1, pergunta:'Pergunta: O que é um algoritmo? \n'},
    {id: 2, pergunta:'Pergunta: O que é uma variável em programação? \n'},
    {id: 3, pergunta:'Pergunta: O que é um loop em programação? \n'},
    {id: 4, pergunta:'Pergunta: O que é uma estrutura condicional em programação? \n'},
    {id: 5, pergunta:'Pergunta: O que é uma função em programação? \n'},
    {id: 6, pergunta:'Pergunta: O que é a recursão em programação? \n'},
    {id: 7, pergunta:'Pergunta: O que é uma estrutura de dados em programação? \n'},
    {id: 8, pergunta:'Pergunta: O que é uma declaração de controle de fluxo em programação? \n'},
    {id: 9, pergunta:'Pergunta: O que é a complexidade de um algoritmo? \n'},
    {id: 10, pergunta:'Pergunta: O que é depuração (debugging) em programação? \n'}
]

const opcoes = [
    
    {id: 1, opcao:
`a) Uma linguagem de programação.
b) Um tipo de dado.
c) Uma sequência de instruções para resolver um problema.
d) Um erro no código`},

    {id: 2, opcao:
`a) Um resultado de uma expressão matemática.
b) Um laço de repetição.
c) Um local de armazenamento para dados.
d) Uma função pré-definida.`},

    {id: 3, opcao:
`a) Uma estrutura condicional.
b) Uma função que retorna um valor.
c) Um tipo de dado.
d) Uma estrutura de controle para repetir um bloco de código.`},

    {id: 4, opcao:
`a) Uma forma de declarar uma variável.
b) Um tipo de dado numérico.
c) Um bloco de código executado várias vezes.
d) Uma estrutura de controle que permite tomar decisões com base em condições.`},

    {id: 5, opcao:
`a) Um operador matemático.
b) Um tipo de dado.
c) Uma estrutura de controle para repetição.
d) Um bloco de código nomeado que executa uma tarefa específica.`},

    {id: 6, opcao:
`a) Uma função que chama a si mesma.
b) Um tipo de erro de sintaxe.
c) Uma forma de depuração de código.
d) Um operador de atribuição.`},

    {id: 7, opcao:
`a) Um formato para impressão de resultados.
b) Uma forma de armazenar dados na memória.
c) Uma função que retorna um valor booleano.
d) Uma operação matemática.`},

    {id: 8, opcao:
`a) Um comentário no código.
b) Uma forma de dividir o código em blocos.
c) Uma estrutura condicional.
d) Uma operação matemática.`},

    {id: 9, opcao:
`a) O número de linhas de código em um programa.
b) O tempo necessário para compilar um programa.
c) A quantidade de recursos que um algoritmo consome.
d) O número de funções em um programa.`},

    {id: 10, opcao:
`a) A otimização de um algoritmo.
b) A documentação de um programa.
c) A execução passo a passo do código para encontrar e corrigir erros.
d) A análise de resultados de um programa.`}

]

const respostas = [
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

let pontuacao_total = 0
let i = 0
let resposta
let segunda_resposta = 0
let acertos = 0
let erros = 0
let numero_questao = 1

while(i < 10) {
    console.log('\n=== Quiz Lógica de Programação e Algoritimo ===')
    console.log('\nPergunta '+ numero_questao)
    console.log(perguntas[i].pergunta)
    console.log(opcoes[i].opcao)
    resposta = entradaDados.question('\nDigite uma opcao: ')
    if (resposta == respostas[i].opcao) {
        pontuacao_total = pontuacao_total + 10
        acertos += 1
        console.log('\nResposta Certa!!\n')
        numero_questao += 1
    } else {
        console.log('Resposta errada tente novamente! vale 5 pontos')
        console.log('\nPergunta '+ numero_questao)
        console.log(perguntas[i].pergunta)
        console.log(opcoes[i].opcao)
        segunda_resposta = entradaDados.question('Digite uma opcao: ')
        erros += 1
        if (segunda_resposta == respostas[i].opcao) {
            pontuacao_total = pontuacao_total + 5
            acertos += 1
            numero_questao += 1
            console.log('\nResposta Certa!!')
        } else {
            console.log('\nResposta errada!!')
            console.log('\nResposta certa: '+ respostas[i].resposta +'\n')
            erros += 1
            numero_questao += 1
        }
    }
    console.log('Pontuação: '+ pontuacao_total +'\n')
    i += 1
}

if (pontuacao_total == 100) {
    console.log('Excelente!')
} else if (pontuacao_total >= 75) {
    console.log('Otimo!')
} else if (pontuacao_total >= 50) {
    console.log('Bom!')
} else if (pontuacao_total >= 25) {
    console.log('Regular!')
} else {
    console.log('Pessimo!')
}
console.log('Você acertou: '+acertos+' e errou: '+erros+' vezes .\n\n')