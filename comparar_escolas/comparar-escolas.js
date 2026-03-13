

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



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */


/* ===== OBTER ELEMENTOS ===== */

const cidadeA = document.querySelector(".unidadeA__cidade");
const codigoA = document.querySelector(".unidadeA__codigo");
const anoA = document.querySelector(".unidadeA__ano");
const cursosA = document.querySelector(".unidadeA__cursos");

const cidadeB = document.querySelector(".unidadeB__cidade");
const codigoB = document.querySelector(".unidadeB__codigo");
const anoB = document.querySelector(".unidadeB__ano");
const cursosB = document.querySelector(".unidadeB__cursos");

const mensagem_unidades = document.querySelector("unidadeB__mensagem, unidadeA__mensagem");



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */

const unidadeA = new Senai(codigoA, cidadeA, anoA, cursosA)
function mostrarMensagem(mensagem) {
  
}

/* ===== INSTANCIAR ESCOLA B ===== */

const unidadeB = new Senai(codigoB, cidadeB, anoB, cursosB)



/* ===== ABRIR ESCOLA ===== */

unidadeA.abrirEscola();
unidadeB.abrirEscola();

/* ===== FECHAR ESCOLA ===== */

unidadeA.fecharEscolar();
unidadeB.fecharEscola();

/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */

function novaConsulta(){
  dadosUnidades.style.display = 'none'
  unidadeA.value = ''
  unidadeB.value = ''
  unidadeA.focus();
}

