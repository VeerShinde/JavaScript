// create html element using js
// createElement()
// best way to add and create element in js

// now i want add new element in todo-list, lets see how can we do that

// first we need to create element which we want to add, li is created
const createele = document.createElement("li")

// then in createele textnode we are storing mobile
createele.textContent = "Mobile"

// then select in which class you are going to append this element
const todolist = document.querySelector(".todo-list");

// append(): append always add element at last
// then append that element in selected class.
todolist.append(createele);
console.log(createele)    // <li>Mobile</li> is added.


// prepend(): prepend to add element at starting.
const create = document.createElement("h1")
create.textContent = "Veer Shinde";
const section = document.querySelector(".section-signup");
section.prepend(create);
// this will add Veer Shinde in the starting of class section-signup.


// remove(): to remove the element
const remove = document.querySelector(".todo-list ul");
remove.remove(remove);









