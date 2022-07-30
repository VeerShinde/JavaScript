// imp array methods
// foreach
// it work like for loop

// const numbers = [2, 4, 6, 8];
// function multiplyby2(number, index) {
//     console.log(`index is ${index} and number is ${number}`);
// }

// multiplyby2(numbers[0], 0);

numbers.forEach(function (number, index) {
    console.log(number * 2, index)
})

const user = [
    { firstname: "Veer", age: 22 },
    { firstname: "Kunal", age: 25 },
    { firstname: "Vidya", age: 49 }
]

user.forEach(function (user) {
    console.log(user.firstname);
});

user.forEach((user) => {
    console.log(user.firstname);
});

const numbers = [1, 4, 8, 6];

function multiplyby2(number, index) {
    console.log("index is  ", index);
    console.log(`${number}*2 = ${number * 2}`);
}

multiplyby2(numbers[0], 0);
multiplyby2(numbers[1], 1);
multiplyby2(numbers[2], 2);
multiplyby2(numbers[3], 3);

const num = [2, 3, 4, 5];

num.forEach(function (number) {
    console.log(number * 2)
})

num.forEach(function (user) {
    console.log(user)
})