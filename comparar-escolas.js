
/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */

// elementos classe A
const cidadeA = document.querySelector(".unidadeA__cidade");
const codigoA = document.querySelector(".unidadeA__codigo");
const anoA = document.querySelector(".unidadeA__ano");
const cursosA = document.querySelector(".unidadeA__cursos");
const mensagemUnidadeA = document.querySelector("unidadeA__mensagem");
const botaoInstanciarA = document.querySelector("unidade__botao unidadeA__instanciar")

// elementos classe B
const cidadeB = document.querySelector(".unidadeB__cidade");
const codigoB = document.querySelector(".unidadeB__codigo");
const anoB = document.querySelector(".unidadeB__ano");
const cursosB = document.querySelector(".unidadeB__cursos");
const mensagemUnidadeB = document.querySelector("unidadeB__mensagem")
const botaoInstanciarB = document.querySelector("unidade__botao unidadeB__instanciar")

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

/* ===== INSTANCIAR ESCOLA A ===== */

const unidadeA = new Senai(codigoA.value, cidadeA.value, anoA.value, cursosA.value)
function mostrarMensagemA(mensagem) {
  mensagemUnidadeA.textContent = mensagem;
};
/* ===== OBTER ELEMENTOS ===== */


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


/* ===== INSTANCIAR ESCOLA B ===== */

const unidadeB = new Senai(codigoB.value, cidadeB.value, anoB.value, cursosB.value)
function mostrarMensagemB(mensagem) {
  mensagemUnidadeB.textContent = mensagem;
};

botaoInstanciarB.addEventListener('click', () =>{
    
})
/* ===== ABRIR ESCOLA ===== */

/* ===== FECHAR ESCOLA ===== */

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */

function novaConsulta(){
  mensagem_unidades.style.display = 'none'
  unidadeA.value = ''
  unidadeB.value = ''
  unidadeA.focus();
}

