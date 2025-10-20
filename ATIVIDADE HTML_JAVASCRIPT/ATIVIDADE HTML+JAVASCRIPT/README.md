LAB03 – HTML + JavaScript
Estudo de Caso: Gerenciamento de Alunos em uma Escola de Programação
🎯 Objetivo

Implementar um sistema simples para cadastrar, listar, editar e excluir alunos (CRUD) e gerar relatórios com base nos dados cadastrados, utilizando HTML, CSS e JavaScript puros.

🧱 Estrutura de Pastas
ATIVIDADE HTML+JAVASCRIPT/
│
├── index.html              # Página principal do sistema
├── css/
│   └── style.css           # Arquivo de estilos
├── js/
│   └── app.js              # Lógica JavaScript (CRUD + Relatórios)
└── README.md               # Descrição do projeto

⚙️ Funcionalidades Implementadas
Exercício 1 – Cadastro e Tabela (CRUD)

Formulário com campos: Nome, Idade, Curso, Nota Final

Botões: Cadastrar, Atualizar, Limpar e Inserir Exemplos

Tabela dinâmica com botões Editar e Excluir

Exercício 2 – Classe Aluno

Atributos: nome, idade, curso, notaFinal

Métodos:

isAprovado() → retorna true se notaFinal ≥ 7

toString() → retorna os dados formatados do aluno

Exercício 3 – Eventos e Arrow Functions

Uso de addEventListener

Manipulação do DOM com funções anônimas e arrow functions

Atualização dinâmica da tabela

Exercício 4 – Relatórios (filter, map, reduce, sort)

Listar alunos aprovados

Calcular média das notas

Calcular média das idades

Listar nomes em ordem alfabética

Mostrar quantidade de alunos por curso

💻 Como Executar no VS Code

Abra o VS Code e vá em Arquivo → Abrir Pasta → selecione ATIVIDADE HTML+JAVASCRIPT.

Instale a extensão Live Server (Ritwick Dey).

Clique com o botão direito em index.html → Open with Live Server.

O sistema abrirá no navegador em http://127.0.0.1:5500 (ou similar).

📋 Tecnologias Utilizadas

HTML5 → estrutura e formulário

CSS3 → estilização e layout responsivo

JavaScript (ES6) → lógica de CRUD, classes, eventos e relatórios

🧠 Conceitos Abordados

Manipulação de DOM

Orientação a objetos em JavaScript

Funções anônimas e arrow functions

Métodos funcionais (filter, map, reduce, sort, forEach)

📌 Observações

O projeto não usa frameworks ou bibliotecas externas.

Todos os dados são armazenados apenas em memória (array).

É possível estender o projeto para salvar dados no LocalStorage ou gerar relatórios em PDF.