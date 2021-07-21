window.addEventListener("DOMContentLoaded", () => {
  const body = document.body,
    slides = document.querySelectorAll(".slide"),
    leftBtn = document.querySelector("#left"),
    rightBtn = document.querySelector("#right");

  let activeSlide = 0;

  function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  }

  function setActiveSlide() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[activeSlide].classList.add("active");
  }

  function slideClick(btn) {
    btn.addEventListener("click", () => {
      if (btn === leftBtn) {
        activeSlide--;
        if (activeSlide < 0) {
          activeSlide = slides.length - 1;
        }
      } else {
        activeSlide++;
        if (activeSlide > slides.length - 1) {
          activeSlide = 0;
        }
      }

      setBgToBody();
      setActiveSlide();
    });
  }

  setBgToBody();
  slideClick(leftBtn);
  slideClick(rightBtn);
});
