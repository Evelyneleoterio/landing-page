const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu");

// Função para verificar o tamanho da tela
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    // Comportamento mobile
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Mostrar menu ao passar o mouse no hamburguer
    hamburger.addEventListener("mouseenter", () => {
      navLinks.classList.add("active");
    });

    // Esconder menu quando o mouse sai
    navLinks.addEventListener("mouseleave", () => {
      navLinks.classList.remove("active");
    });
  } else {
    // Comportamento desktop - garantir que o menu está visível
    navLinks.style.display = "flex";
    navLinks.classList.remove("active");
  }
}

// Verificar ao carregar e ao redimensionar
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

// Seu código original de animação permanece o mesmo
const articles = document.querySelectorAll(".box-caixas article");
let lastScrollTop = 0;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function checkScroll() {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  articles.forEach((article) => {
    if (isElementInViewport(article)) {
      article.classList.add("visible");
    } else {
      article.classList.remove("visible");
    }
  });

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

window.addEventListener("scroll", checkScroll);
checkScroll();
