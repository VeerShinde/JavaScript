// promise chaining

function mypromise() {
    return new Promise((resolve, reject) => {
        resolve("veer");
    });
};

mypromise()
    .then((name) => {
        console.log(name)
        name += "shinde";
        return name;                        // here name is not returning promise is returning. internally js returing like this Promise.resolve(name);
    })
    // we can't give then to string.
    .then((value) => {
        console.log(value)
        value += "vidya";
        return value
    })
    .then((value) => { console.log(value); value += "kunal"; return value });

// output:
// veer
// veershinde
// veershindevidya 


