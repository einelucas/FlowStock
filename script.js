const mobileMenu = document.getElementById("mobile-menu");
const slideMenu = document.getElementById("slide-menu");

// Abrir/fechar menu
mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  slideMenu.classList.toggle("active");
  mobileMenu.style.display = slideMenu.classList.contains("active")
    ? "none"
    : "flex";
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (!slideMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
    slideMenu.classList.remove("active");
    mobileMenu.style.display = "flex";
  }
});
