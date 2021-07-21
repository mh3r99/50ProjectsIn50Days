window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelectorAll(".ripple");

  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const x = e.clientX,
        y = e.clientY;

      const buttonTop = e.target.offsetTop,
        buttonLeft = e.target.offsetLeft;

      const xInside = x - buttonLeft,
        yInside = y - buttonTop;

      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.top = yInside + "px";
      circle.style.left = xInside + "px";

      btn.appendChild(circle);

      setTimeout(() => circle.remove(), 6000);
    });
  });
});
