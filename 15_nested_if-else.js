//nested if else
// to ask input from user use "prompt"
// Perfect guessing game

let guess = 25;
let usernumber = +prompt("Enter a number");     // input, is default string.

if (usernumber === guess) {
    console.log("You guessed the right number");
} else {
    if (usernumber < guess) {
        console.log("Too low!!!");
    } else {
        console.log("Too high");
    }
}


// else if
// example:

let temperature = 26;

if (temperature >= 0 && temperature <= 9) {
    console.log("Too cold dont go out");
} else if (temperature >= 10 && temperature <= 19) {
    console.log("You can go but wear jacket");
} else if (temperature >= 20 && temperature <= 29) {
    console.log("You can travel");
} else if (temperature >= 30 && temperature <= 39) {
    console.log("Hot weather")
} else {
    console.log("Too hot, Please dont go outside");
}
console.log("Done")
