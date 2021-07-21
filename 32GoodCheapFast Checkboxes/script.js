window.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle"),
    good = document.querySelector("#good"),
    cheap = document.querySelector("#cheap"),
    fast = document.querySelector("#fast");

  toggles.forEach((toggle) =>
    toggle.addEventListener("change", (e) => doTheTrick(e.target))
  );

  function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
      if (good === theClickedOne) {
        fast.checked = false;
      }

      if (cheap === theClickedOne) {
        good.checked = false;
      }

      if (fast === theClickedOne) {
        cheap.checked = false;
      }
    }
  }
});
