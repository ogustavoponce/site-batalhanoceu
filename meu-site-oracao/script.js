/* ---- SCRIPT DO MENU HAMBÚRGUER ---- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Função para abrir/fechar o menu
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Evento de clique no ícone do hambúrguer
hamburger.addEventListener("click", toggleMenu);

// Evento para fechar o menu ao clicar em um link (útil para navegação na mesma página)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            toggleMenu();
        }
    });
});
