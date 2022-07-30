// Clone nodes
// if you want to add same element through append and prepend its not possible, that's why we need to clone 1st.

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Equipment";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);


