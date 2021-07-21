window.addEventListener("DOMContentLoaded", () => {
  const textEl = document.querySelector("#text"),
    speedEl = document.querySelector("#speed"),
    text = "We Love Programming!";

  let i = 1;
  let speed = 300 / speedEl.value;

  function writeText() {
    textEl.innerText = text.slice(0, i);
    i++;

    if (i > text.length) {
      i = 1;
    }

    setTimeout(writeText, speed);
  }

  writeText();
  speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
});
