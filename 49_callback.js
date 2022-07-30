// callback function
// Calling a function in function
// Passing a function in functions as argument
// For eg:


function me(name) {
    console.log(`My name is ${name} `)
}

function you(callback) {
    console.log(`your name is Kunal`)
    callback("Veer")            // technically this is "me" function 
}

you(me);




function mybro(name) {
    console.log(`My name is ${name}`)
}

function mymom(callback) {
    console.log("My name is Vidya Shinde");
    callback("Adarsh")
}

mymom(mybro)