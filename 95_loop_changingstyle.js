// here i am going to change background color and font color of classname nav-products using js.

let navproducts = document.getElementsByTagName("a");    //HTMLCollection
// we can't use foreach method to iterate through HTMLCollection
// console.log(navproducts.length);
for (let i = 0; i < navproducts.length; i++) {
    console.log(navproducts[i]);
    const navprod = navproducts[i];
    navprod.style.backgroundColor = "red";
    navprod.style.color = "green";
}

navproducts = Array.from(navproducts);            // to change navproducts to array, then we use any method of array like push, pop, slice, map, filter and many more.

// console.log(Array.isArray(mainheading));  



