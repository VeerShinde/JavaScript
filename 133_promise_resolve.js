// Promise.resolve 
// Returns a new Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.
// Generally, if you don't know if a value is a promise or not, Promise.resolve(value) it instead and work with the return value as a promise.
// resolve method return the resolved value, which we are going to get after resolving.

const mypromise = Promise.resolve("Veer");
mypromise.then((value => { console.log(value) }));


// then() method always return promise only.