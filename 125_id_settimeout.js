// setTimeout return a id when executed.
// for eg 

const id = setTimeout(() => {
    console.log("...")
}, 1000);
console.log("settimeout id is", id);      // this will return id. a positive number.


// now understand why id is used, why it exist?
// when we want to stop/remove already declared settimeout function we need his id.

console.log("settimeout cleared")
clearTimeout(id);       // now settimeout func will not run.