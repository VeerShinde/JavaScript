// how to get dimensions of the element(height, width, and many more)

const todo = document.querySelector(".todo-list");
const info = todo.getBoundingClientRect();
console.log(info);

// to see particular:
const info1 = todo.getBoundingClientRect().height;
const info2 = todo.getBoundingClientRect().width;
const info3 = todo.getBoundingClientRect().top;
const info4 = todo.getBoundingClientRect().bottom;