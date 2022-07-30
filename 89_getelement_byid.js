// select element using get element by id 
// file 86 is linked
// so here we know all elements get stored in window by object named document so we are going to call one element from there.
// so here we are going to print the element which has id main-heading.

console.log(document.getElementById("main-heading"));
// output: <h2 id="main-heading">Your Plan for today?</h2> 
// this seems that js has return us a complete element but its return in object form.
console.log(typeof document.getElementById("main-heading"));    // object

const mainheading = (document.getElementById("main-heading"));
console.log(mainheading);