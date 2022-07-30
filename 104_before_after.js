// insert element before selected element.

const create = document.createElement("h1");
create.textContent = "Cruise";
const todo = document.querySelector(".todo-list");
todo.before(create);
// this will add h1 element with content Cruise before class todo-list, not inside todo-list.


// insert element after selected element
const createele = document.createElement("h1");
createele.textContent = "Titanic";
const todolist = document.querySelector(".todo-list");
todolist.after(createele);
// this will add h1 element with content Titanic after class todo-list, not inside todo-list.
