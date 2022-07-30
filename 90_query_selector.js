// Select element using Query selector.
// file 86 is linked


// The syntax is like css, so to call class element we will use .class name and for id #idname in query slector:
// you can select any css selector: body, a, etc.
const mainheading = (document.querySelector("#main-heading"));
console.log(mainheading);
// output will be:
/* <h2 id="main-heading">Your Plan for today?</h2> */

// if you want to call class:
const mainhead = (document.querySelector(".nav-products"));
console.log(mainhead);

// so here 3 elements has class nav-products but js will see the 1st one and return it.
// to return all element with class nav-product use queryselectorall

const main = (document.querySelectorAll(".nav-products"));
console.log(main);

// this will print all element with class nav-product.


