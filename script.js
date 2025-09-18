const texto = "Giovanna de Oliveira";
const nome = document.getElementById("nome");

function digitar() {
  nome.textContent = ""; // limpa antes de reescrever
  let i = 0;
  function escrever() {
    if (i < texto.length) {
      nome.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, 120);
    }
  }
  escrever();
}

// usar Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      digitar(); // chama quando a seção está visível
    }
  });
}, { threshold: 0.6 }); // dispara quando 60% do elemento aparece

observer.observe(nome);
