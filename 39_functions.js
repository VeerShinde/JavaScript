// functions

// how to declare function 
// syntax:
// function functionname(){

// };

// function is used to print something again and again.

function sumtwonumbers(num1, num2) {
    // console.log(num1 + num2)                
    return num1 + num2;
}

// function only print when we call them
console.log(sumtwonumbers(5, 5));



function happybirthday() {
    console.log("Wish you happy birthday");
}

happybirthday();
happybirthday();
happybirthday();


function oddoreven(number) {
    return number % 2 === 0;
}
console.log(oddoreven(4));


function evenorodd(number1) {
    if (number1 % 2 === 1) {
        return true;
    }
    return false;
}

console.log(evenorodd(10));

console.log(undefined + undefined);          //Nan(not a number)


function sum4num(a, b, c, d) {
    console.log(a + b + c + d)
}

sum4num(5, 5, 5, 5);

function printeven(a) {
    return a % 2 === 0;
}

console.log(printeven(5));

function firstchar(str) {
    return str[0];
}

console.log(firstchar("Veer"));

function findtarget(number, target) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] === target) {
            return i;
        };
    }
    return -1
}

let myarr = [1, 2, 3, 4];
console.log(findtarget(myarr, 2));