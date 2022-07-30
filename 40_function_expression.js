// function expression
// put the function in variable and then varibale name will be function name
// For eg:

const sumtwonumbers = function (num1, num2) {
    console.log(num1 + num2);
}

sumtwonumbers(5, 5)                      // 10

const oddoreven = function (num) {
    console.log(num % 2 === 0);
}

oddoreven(4);
oddoreven(7);
oddoreven(46);
oddoreven(144);

const happybirthday = function () {
    console.log("Happy Birthday");
}

happybirthday();
happybirthday();
happybirthday();

let name = function(a){
    console.log(`my name is ${a}`)
}

name("Veer")