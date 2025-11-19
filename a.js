// Animação de fade-in suave ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade");
    elementos.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, 200 * i);
    });
});
