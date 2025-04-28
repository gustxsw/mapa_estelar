document.addEventListener("DOMContentLoaded", () => {
  // Estrelas caindo
  const container = document.querySelector(".stars-container");

  for (let i = 0; i < 60; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-solid", "fa-star", "star");

    const size = Math.random() * 1.2 + 0.5;
    const duration = Math.random() * 5 + 4;
    const delay = Math.random() * 10;

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = -Math.random() * 100 + "px";
    star.style.fontSize = size + "rem";
    star.style.animationDuration = duration + "s";
    star.style.animationDelay = delay + "s";

    container.appendChild(star);
  }

  // (Se você quiser adicionar funcionalidades para o botão futuramente, aqui é um bom lugar)
  document
    .getElementById("stellarium-button")
    .addEventListener("click", function () {
      window.open("https://stellarium-web.org/", "_blank");
    });
});
