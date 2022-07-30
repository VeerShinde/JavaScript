// arrow function
// remove function keyword and after parenthesis add "=>", this is also work like a function now.

// const sumtwonumbers = function (num1, num2) {
//     console.log(num1 + num2);
// }

const sumtwonumbers = (num1, num2) => {
    console.log(num1 + num2);
}

sumtwonumbers(5, 5)                      // 10

const oddoreven = num => {            // if we have only one value in parameter/input than we can remove parenthesis also.
    console.log(num % 2 === 0);
}

oddoreven(555);

const sumofthreenumbers = (num3, num4, num5) => {
    console.log(num3 + num4 + num5);
}

sumofthreenumbers(5, 5, 5);


// best way to use arrow function
// if we only have 1 statement to execute we can use arrow function like this.
const firstchar = anychar => anychar[0];

console.log(firstchar("veer"));           // v






