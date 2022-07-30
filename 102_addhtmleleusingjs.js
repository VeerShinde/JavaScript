//  How to add html element using Js

const todolist = document.querySelector(".todo-list");
console.log(todolist.innerHTML);

todolist.innerHTML += "<li>Items</li>";   // we have added new element in class todo-list.
todolist.innerHTML += "<li>Freebies</li>"   // we have added new element in class todo-list.

// when you should not use innerhtml
// don't use inner html to add element in html its a wrong practice.

// when you should use inner html
// if you want to change inner html then you should use innerhtml.