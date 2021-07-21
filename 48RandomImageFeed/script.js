window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container"),
    unsplashURL = "https://source.unsplash.com/random/",
    rows = 5;

  for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;

    container.append(img);
  }

  function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`;
  }

  function getRandomNum() {
    return Math.floor(Math.random() * 10) + 300;
  }
});
