//  map method
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.
// always use return while using map function

const numbers = [1, 3, 5, 7];

const num = numbers.map(function (number, index) {
    return `index is ${index} cube is ${number * number}`;
})

// console.log(num)

const number1 = [2, 3, 8, 6];

const square = number1.map(function (numbe) {
    return numbe * 2;
});

// console.log(square)


// map function always make new array and store elements in them, so that's why we have to store them new variable and print it.
// function doublenum(numb){
//     return numb + numb
// }

// const double = number1.map(doublenum)       // in this line we are using callback function
// console.log(double)

const user = [
    { firstname: "Veer", age: 22 },
    { firstname: "Kunal", age: 25 },
    { firstname: "Vidya", age: 49 }
]

const user2 = user.map(function (user1) {
    return (user1.firstname)
})

console.log(user2)

const userfirstname = user.map((user3) => {               // we are using callback function here
    return user3.age;
})

console.log(userfirstname)


const family = [
    { firstname: "Vidya", age: 49 },
    { firstname: "Veer", age: 22 },
    { firstname: "Kunal", age: 24 }
]

const faminfo = family.map((familyinfo) => {
    return familyinfo.age;
})

console.log(faminfo);



