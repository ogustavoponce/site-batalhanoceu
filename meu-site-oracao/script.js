/* ---- SCRIPT DO MENU HAMBÚRGUER ---- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // Fecha o menu ao clicar em um link
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


/* ---- SCRIPT: ANIMAÇÃO AO ROLAR A PÁGINA ---- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // Descomente a linha abaixo se quiser que a animação aconteça toda vez que o elemento entra na tela
        // else { entry.target.classList.remove('show'); }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
