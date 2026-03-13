

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

const cidadeA = document.getElementsByClassName("unidadeA__cidade");
const codigoA = document.getElementsByClassName("unidadeA__codigo");
const anoA = document.getElementsByClassName("unidadeA__ano");
const cursosA = document.getElementsByClassName("unidadeA__cursos");

const cidadeB = document.getElementsByClassName("unidadeB__cidade");
const codigoB = document.getElementsByClassName("unidadeB__codigo");
const anoB = document.getElementsByClassName("unidadeB__ano");
const cursosB = document.getElementsByClassName("unidadeB__cursos");

/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */

const unidadeA = new Senai(codigoA, cidadeA, anoA, cursosA)

/* ===== INSTANCIAR ESCOLA B ===== */

const unidadeB = new Senai()


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

