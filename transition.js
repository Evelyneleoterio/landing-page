// Função para verificar o tamanho da tela
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    // Comportamento mobile
    hamburger.style.display = "flex"; // Mostra o hamburguer
    navLinks.style.display = "none"; // Esconde o menu inicialmente

    // Remove event listeners antigos para evitar duplicação
    hamburger.removeEventListener("click", toggleMenu);
    document.removeEventListener("click", closeMenuOnClickOutside);

    // Adiciona os novos event listeners
    hamburger.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenuOnClickOutside);

    // Remove os listeners de mouse que não são ideais para mobile
    hamburger.removeEventListener("mouseenter", () =>
      navLinks.classList.add("active")
    );
    navLinks.removeEventListener("mouseleave", () =>
      navLinks.classList.remove("active")
    );
  } else {
    // Comportamento desktop
    hamburger.style.display = "none";
    navLinks.style.display = "flex";
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");

    hamburger.removeEventListener("click", toggleMenu);
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".box-caixas article");

  function checkScroll() {
    articles.forEach((article) => {
      const articleTop = article.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (articleTop < windowHeight - 100) {
        article.classList.add("visible");
      }
    });
  }

  // Verifica ao carregar
  checkScroll();

  // Verifica ao rolar
  window.addEventListener("scroll", checkScroll);
});
