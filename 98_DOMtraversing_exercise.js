// take a look at 97_index.html file before this.
// Exercise is select h1 which is inside body and give h1 parent background color and textcolor.

const mainheading = document.querySelector("h1");
const parenthead = mainheading.parentNode;
parenthead.style.backgroundColor = "red";
parenthead.style.color = "green";


// to reach parent of the h1 parent of parent which is body
const mainhead = document.querySelector("h1");
const parenthead = mainhead.parentNode.parentNode;
parenthead.style.backgroundColor = "red";
parenthead.style.color = "green";
