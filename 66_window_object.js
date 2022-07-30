// in window object every property of js is store for eg: push, pop, getter, map, set every property is store in window.
console.log(window);
console.log(this);
// this === window both are same.

function myfunc() {
    console.log(this)
};

myfunc();

// use strict mode if any variable name 'this' is defined.

