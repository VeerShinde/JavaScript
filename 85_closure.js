// first remember function can return function
// find notes 

function hello() {
    function myhello() {
        console.log("Hello world")
    }
    return myhello;
}

const ans = hello();
ans();


function printfullname(firstname, lastname) {
    function printname() {
        console.log(firstname, lastname);
    }
    return printname;
};

const give = printfullname("Veer", "Shinde");
give();


function hello(x) {
    const a = "vara";
    const b = "varb";
    return function () {
        console.log(a, b, x);
    }
}

const answer = hello("arg");
answer();


// Program to find square of given number using closure
function givenumber(power) {
    function square(number) {
        console.log(number ** power)
    }
    return square;
}

const find = givenumber(2);
find(2);


// program to print anyfunc 1 time.
function call() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hey you called me");
            counter++;
        } else {
            console.log("You have called me already");
        }
    }
}

const callme = call()
callme()
callme();


