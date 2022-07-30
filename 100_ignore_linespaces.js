// take a look at 97_index.html file before this.
// so when we check the childnodes of a parent the text(newline and spaces) is also shown, but i want only element should be shown and line spaces should be ignored.

const div = document.querySelector(".container");
const childs = div.children;        // children property only gives element.
console.log(childs);    // so this will only give h1 and p, all the newline and spaces are ignored.