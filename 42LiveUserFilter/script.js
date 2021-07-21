window.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector("#result"),
    filter = document.querySelector("#filter");

  const listItems = [];

  filter.addEventListener("input", (e) => {
    filterData(e.target.value);
  });

  function filterData(searchTerm) {
    listItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }

  async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();

    result.innerHTML = "";

    results.forEach((user) => {
      const li = document.createElement("li");

      listItems.push(li);

      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
      `;

      result.appendChild(li);
    });
  }

  getData();
});
