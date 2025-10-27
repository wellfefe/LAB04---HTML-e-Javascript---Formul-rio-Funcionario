// Classe Funcionário
class Funcionario {
  constructor(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = parseFloat(salario);
  }

  toString() {
    return `${this.nome} - ${this.cargo} - R$${this.salario.toFixed(2)}`;
  }
}

// Array global de funcionários
let funcionarios = [];
let indiceEdicao = null;

// Cadastro
document.getElementById("form-funcionario").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cargo = document.getElementById("cargo").value;
  const salario = document.getElementById("salario").value;

  const novoFuncionario = new Funcionario(nome, idade, cargo, salario);
  funcionarios.push(novoFuncionario);
  listarFuncionarios();
  e.target.reset();
});

// Listagem
function listarFuncionarios() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  funcionarios.forEach((f, index) => {
    const linha = `
      <tr>
        <td>${f.nome}</td>
        <td>${f.idade}</td>
        <td>${f.cargo}</td>
        <td>${f.salario.toFixed(2)}</td>
        <td>
          <button onclick="editar(${index})">Editar</button>
          <button onclick="excluir(${index})">Excluir</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += linha;
  });
}

// Excluir
const excluir = (index) => {
  funcionarios.splice(index, 1);
  listarFuncionarios();
};

// Editar
const editar = (index) => {
  const f = funcionarios[index];
  document.getElementById("nome").value = f.nome;
  document.getElementById("idade").value = f.idade;
  document.getElementById("cargo").value = f.cargo;
  document.getElementById("salario").value = f.salario;

  document.getElementById("btnCadastrar").style.display = "none";
  document.getElementById("btnAtualizar").style.display = "inline";
  indiceEdicao = index;
};

// Atualizar
document.getElementById("btnAtualizar").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cargo = document.getElementById("cargo").value;
  const salario = document.getElementById("salario").value;

  funcionarios[indiceEdicao] = new Funcionario(nome, idade, cargo, salario);
  listarFuncionarios();
  document.getElementById("form-funcionario").reset();

  document.getElementById("btnCadastrar").style.display = "inline";
  document.getElementById("btnAtualizar").style.display = "none";
});

// RELATÓRIOS (map, filter, reduce)
const relatorioSalarios = () => {
  const filtro = funcionarios.filter(f => f.salario > 5000);
  mostrarRelatorio("Salário > 5000", filtro);
};

const mediaSalarial = () => {
  const media = funcionarios.reduce((acc, f) => acc + f.salario, 0) / funcionarios.length;
  mostrarRelatorio("Média Salarial", `R$ ${media.toFixed(2)}`);
};

const listarCargos = () => {
  const cargos = [...new Set(funcionarios.map(f => f.cargo))];
  mostrarRelatorio("Cargos Únicos", cargos.join(", "));
};

const nomesMaiusculo = () => {
  const nomes = funcionarios.map(f => f.nome.toUpperCase());
  mostrarRelatorio("Nomes em Maiúsculo", nomes.join(", "));
};

function mostrarRelatorio(titulo, conteudo) {
  document.getElementById("relatorio").innerHTML = `<h3>${titulo}</h3><p>${conteudo}</p>`;
}