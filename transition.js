const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu");

function checkScreenSize() {
  if (window.innerWidth <= 768) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    hamburger.addEventListener("mouseenter", () => {
      navLinks.classList.add("active");
    });

    navLinks.addEventListener("mouseleave", () => {
      navLinks.classList.remove("active");
    });
  } else {
    navLinks.style.display = "flex";
    navLinks.classList.remove("active");
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

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
