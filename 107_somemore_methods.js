// some old methods to support poor IE(internet explorer)
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "items";
ul.appendChild("li");