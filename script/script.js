
// LOGIN

function verificarLogin() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const errorEl = document.querySelector(".error");

  if (usuario === "admin" && senha === "admin") {
    window.location.href = "../html/gestor.html";
  } else if (usuario === "user" && senha === "user") {
    window.location.href = "../html/trilhas.html";
  } else {
    errorEl.textContent = "Usuário ou senha incorretos!";
  }
}

// QUIZ
function verificarQuiz(trilha) {
  const form = document.getElementById("quizForm");
  const resultadoEl = document.getElementById("resultado");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Pontuação
    let pontos = 0;
    const respostasCorretas = {
      atendimento: ["A", "A", "A"],
      boaspraticas: ["B", "B", "B"],
      cozinha: ["C", "C", "C"]
    };

    const totalQuestoes = respostasCorretas[trilha].length;

    // Checa cada questão
    for (let i = 1; i <= totalQuestoes; i++) {
      const respostaUsuario = form["q" + i].value;
      if (respostaUsuario === respostasCorretas[trilha][i - 1]) {
        pontos++;
      }
    }

    if (pontos === totalQuestoes) {
      window.location.href = "../html/certificado.html";
    } else {
      resultadoEl.textContent = `Você acertou ${pontos} de ${totalQuestoes} questões. Vamos tentar novamente?`;
    }
  });
}


// FUNÇÃO CHAMADA PELO BOTÃO DO LOGIN

function entradaLogin() {
  verificarLogin();
}

// INICIALIZAÇÃO AUTOMÁTICA PARA CADA QUIZ
document.addEventListener("DOMContentLoaded", () => {
  const bodyId = document.body.id;

  if (bodyId === "atendimento") {
    verificarQuiz("atendimento");
  } else if (bodyId === "boaspraticas") {
    verificarQuiz("boaspraticas");
  } else if (bodyId === "cozinha") {
    verificarQuiz("cozinha");
  }
});
