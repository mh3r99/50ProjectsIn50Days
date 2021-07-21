window.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".rating"),
    ratingsContainer = document.querySelector(".ratings-container"),
    sendBtn = document.querySelector("#send"),
    panel = document.querySelector("#panel");

  let selectedRating = "Satisfied";

  ratingsContainer.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("rating")) {
      removeActive();
      e.target.parentNode.classList.add("active");
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
  });

  sendBtn.addEventListener("click", (e) => {
    // e.stopPropagation();
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
  });

  function removeActive() {
    ratings.forEach((rating) => rating.classList.remove("active"));
  }
});