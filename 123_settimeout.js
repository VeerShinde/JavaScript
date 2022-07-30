// as we know js works in syncronous manner and its single threaded.
// console.log("Script start");
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }
// console.log("Script end");
// above code shows that until line 3 is not finish his work line 5 has to wait,

// let's understand asyncronous
// setTimeout
// setTimeout is provided by web browser not by js.
// The setTimeout() method calls a function after a number of milliseconds.

// 1 second = 1000 milliseconds.

// console.log("start");
// setTimeout(() => {
//     console.log("timeoutmethod")
// }, 1000);
// console.log("end");

// settime out take function as input and as entered 1 sec delay.
// so start and end will get print 1st then timeout method will run and get execute.
// we can also give already declared function in timeout.
// like this 

console.log("begin");
function hello() {
    console.log("Hello everyone");
};

setTimeout(hello, 1000);
console.log("ended");

