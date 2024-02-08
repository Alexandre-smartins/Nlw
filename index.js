
const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação para design gráfico",
      "Uma linguagem de programação para o desenvolvimento web",
      "Um sistema operacional para servidores",
    ],
    correta: 1
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let variavel = 10;",
      "var variavel = 'texto';",
      "const variavel: 5;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
    respostas: [
      "Registrar mensagens de erro no console",
      "Imprimir dados no console para depuração",
      "Executar operações matemáticas no console",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
    respostas: [
      "Uma linguagem de script para animações em 3D",
      "Uma representação hierárquica de elementos HTML/XML",
      "Um método para declarar funções em JavaScript",
    ],
    correta: 1
  },
  {
    pergunta: "Como se realiza uma estrutura condicional 'if' em JavaScript?",
    respostas: [
      "if (condicao) { // código }",
      "condicao ? // código : // outro código;",
      "switch (condicao) { case: // código }",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Ambos comparam valores, mas '===' também verifica o tipo de dado",
      "São equivalentes e podem ser usados indistintamente",
      "Apenas '==' é utilizado para comparação de valores e tipos",
    ],
    correta: 0
  },
  {
    pergunta: "Como se realiza um loop 'for' em JavaScript?",
    respostas: [
      "for (let i = 0; i < 10; i++) { // código }",
      "while (i < 10) { // código i++ }",
      "loop.for (i = 0; i < 10; i++) => { // código }",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Um método de ordenação de dados numéricos",
      "Um formato de dados para troca de informações estruturadas",
      "Uma função para criar objetos em JavaScript",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
    respostas: [
      "Adicionar estilos CSS a elementos HTML",
      "Vincular eventos a elementos HTML para manipulação",
      "Criar novos elementos HTML dinamicamente",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o conceito de 'escopo' em JavaScript?",
    respostas: [
      "A área de trabalho onde são armazenadas as variáveis globais",
      "O intervalo de tempo durante a execução de um código",
      "A limitação de acesso de uma variável a uma função específica",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {  
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
 
 for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))   
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta

  corretas.delete(item)
   if(estaCorreta) {
    corretas.add(item)
   }
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  }
  
  quizItem.querySelector ('dl').appendChild(dt)

 }
  
  
  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)

  }
 