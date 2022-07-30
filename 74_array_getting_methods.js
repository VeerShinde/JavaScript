// from where does array getting his methods like foreach, fill, some and many more.
// array has all his methods in prototype.

const numbers = new Array(1,2,3) // js make array like this in behind which we can't see, so new keyword has access to prototype.
console.log(numbers)        
console.log(Array.prototype)   // here you can see array has all the methods in their prototype.

// we can also change prototype

function hello(){
    console.log("Hello World");     
};

hello.prototype = [];                // we have changed prototype to empty array.
console.log(hello.prototype);        
