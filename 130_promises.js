// A JavaScript Promise object contains both the producing code and calls to the consuming code:
// promise is asynccronous js, handle bye web browser.
// execute after all the javascript code end.
// using promise we are going to makes maggie for us.

// promise syntax
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)

//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

// promise has 2 things: status: pending or fulfilled or rejected, value: after fulfilled the value we get.

// Promise Object Properties
// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// promise has 2 things: status: pending or fulfilled or rejected, value: after fulfilled the value we get.


const bucket = ["coffee", "maggie", "masala", "sugar", "water"]  // ingredients

//produce phase
const mypromise = new Promise((resolve, reject) => {                    // promise declared
    if (bucket.includes("maggie") && bucket.includes("masala") && bucket.includes("water")) {    // ingredients we need to make maggie, if anyone missing reject will be called.
        resolve("maggie masala")              // resolve means what to run when everyting is fine. 
    } else {
        reject("couldn't make it");           // rejct means what to run when something is wrong.
    }
});
// produce, produnction phase done


// Promise.then() takes two arguments, a callback for success and another for failure.
// lets make consume phase
mypromise.then((mymaggie) => { console.log("lets eat", mymaggie) })     // here in mymaggie the data will be fetch which resolve give us.
    // (error) => { console.log(error) };          // here in error the data will be fetch which reject give us.
    // this is not the correct way to handle error. use '.catch'
    .catch((error) => console.log(error));

// promise is add in microtask queue, not in a callback queue.
// when settimeout and promise is in a queue at that time microtask queue will run first then callback queue.