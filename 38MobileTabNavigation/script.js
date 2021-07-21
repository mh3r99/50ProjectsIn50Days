window.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".content"),
    listItems = document.querySelectorAll("nav ul li");

  listItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      hideAllContents();
      hideAllItems();

      item.classList.add("active");
      contents[i].classList.add("show");
    });
  });

  function hideAllContents() {
    contents.forEach((content) => content.classList.remove("show"));
  }

  function hideAllItems() {
    listItems.forEach((item) => item.classList.remove("active"));
  }
});
