class Aluno {
constructor(nome, idade, curso, notaFinal) {
this.nome = nome.trim();
this.idade = Number(idade);
this.curso = curso;
this.notaFinal = Number(notaFinal);
}
isAprovado() { return this.notaFinal >= 7; }
toString() { return `${this.nome} | ${this.curso} | idade ${this.idade} | nota ${this.notaFinal.toFixed(1)} (${this.isAprovado() ? 'Aprovado' : 'Reprovado'})`; }
}


const alunos = [];
let indexEdicao = null;
const $ = s => document.querySelector(s);
const form = $('#alunoForm');
const tbody = $('#tbodyAlunos');
const saida = $('#saida');


const renderTabela = () => {
tbody.innerHTML = '';
alunos.forEach((a,i)=>{
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${i+1}</td><td>${a.nome}</td><td>${a.idade}</td><td>${a.curso}</td><td>${a.notaFinal.toFixed(1)}</td>
<td><span class="badge ${a.isAprovado()?'ok':'bad'}">${a.isAprovado()?'Aprovado':'Reprovado'}</span></td>
<td><button class="btn success" data-acao="editar" data-i="${i}">Editar</button> <button class="btn warn" data-acao="excluir" data-i="${i}">Excluir</button></td>`;
tbody.appendChild(tr);
});
};


const limparFormulario = () => { form.reset(); indexEdicao=null; $('#btnCadastrar').hidden=false; $('#btnAtualizar').hidden=true; };
const preencherFormulario = a => { $('#nome').value=a.nome; $('#idade').value=a.idade; $('#curso').value=a.curso; $('#notaFinal').value=a.notaFinal; };


form.addEventListener('submit', e=>{
e.preventDefault();
const {nome,idade,curso,notaFinal}=Object.fromEntries(new FormData(form));
if(!nome||!curso) return alert('Preencha todos os campos');
alunos.push(new Aluno(nome,idade,curso,notaFinal));
renderTabela(); limparFormulario();
});


$('#btnAtualizar').addEventListener('click',()=>{
const {nome,idade,curso,notaFinal}=Object.fromEntries(new FormData(form));
if(indexEdicao===null) return;
alunos[indexEdicao]=new Aluno(nome,idade,curso,notaFinal);
renderTabela(); limparFormulario();
});


$('#btnLimpar').addEventListener('click',()=>limparFormulario());


tbody.addEventListener('click',e=>{
const btn=e.target.closest('button'); if(!btn) return;
const i=Number(btn.dataset.i);
if(btn.dataset.acao==='excluir'){ if(confirm('Excluir aluno?')){ alunos.splice(i,1); renderTabela(); } }
else if(btn.dataset.acao==='editar'){ indexEdicao=i; preencherFormulario(alunos[i]); $('#btnCadastrar').hidden=true; $('#btnAtualizar').hidden=false; }
});


$('#btnSeed').addEventListener('click',()=>{
alunos.push(
new Aluno('Ana Clara',19,'JavaScript',8.7),
new Aluno('Bruno Reis',22,'Python',6.2),
new Aluno('Carla Nunes',20,'Java',7.5),
new Aluno('Diego Lima',18,'Python',9.1)
);
renderTabela();
});


const mostrar=t=>saida.textContent=t||'(sem dados)';
$('#btnAprovados').addEventListener('click',()=>mostrar(alunos.filter(a=>a.isAprovado()).map(a=>'• '+a.toString()).join('\n')));
$('#btnMediaNotas').addEventListener('click',()=>{if(!alunos.length)return mostrar('Sem alunos');const m=alunos.reduce((s,a)=>s+a.notaFinal,0)/alunos.length;mostrar(`Média das notas: ${m.toFixed(2)}`)});
$('#btnMediaIdades').addEventListener('click',()=>{if(!alunos.length)return mostrar('Sem alunos');const m=alunos.reduce((s,a)=>s+a.idade,0)/alunos.length;mostrar(`Média das idades: ${m.toFixed(1)}`)});
$('#btnNomesAZ').addEventListener('click',()=>mostrar(alunos.map(a=>a.nome).sort((a,b)=>a.localeCompare(b)).map(n=>'• '+n).join('\n')));
$('#btnQtdPorCurso').addEventListener('click',()=>{const c=alunos.reduce((m,a)=>{m[a.curso]=(m[a.curso]||0)+1;return m;},{});mostrar(Object.entries(c).map(([k,v])=>'• '+k+': '+v).join('\n'))});
renderTabela();