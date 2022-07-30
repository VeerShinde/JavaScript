// insertAdjacentHtml()
// Using this you can add html element at specified location.
// synatx is: ele.insertAdjacentHTML(where, html);

// "beforebegin"
// Before the element. Only valid if the element is in the DOM tree and has a parent element.

// "afterbegin"
// Just inside the element, before its first child.

// "beforeend"
// Just inside the element, after its last child.

// "afterend"
// After the element. Only valid if the element is in the DOM tree and has a parent element.

const select = document.querySelector(".todo-list");
select.insertAdjacentHTML("afterbegin", "<li>My class</li>");

