// array like objects means we can use indexing, access, and has length.
// get multiple element using getElements by class name
const mainheading = document.getElementsByClassName("nav-products");    //HTMLCollection
console.log(mainheading);     // this will return all the elements with class name nav-products in the form of array like object.
console.log(mainheading[0]);  // 1st element of class-products.
console.log(typeof mainheading);   // object
console.log(Array.isArray(mainheading));      // false



// get multiple elements items using quesrySelectorAll
const mainhead = document.querySelectorAll(".nav-products");         //NodeList
console.log(mainhead);    // this will return all the elements with class name nav-products in the form of array like object.
console.log(mainhead[1]);   //2nd element of class-products.
console.log(typeof mainhead);   // object
console.log(Array.isArray(mainhead));      // false
