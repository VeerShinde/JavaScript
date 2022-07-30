// function returning promise.

function mypromise() {
    const bucket = ["water", "maggie", "masala"];
    return new Promise((resolve, reject) => {
        if (bucket.includes("water") && bucket.includes("maggie") && bucket.includes("masala")) {
            resolve("maggie masala")
        } else {
            reject("could not make it");
        };
    })
}

mypromise().then((mymaggie) => { console.log(mymaggie) }).catch((error) => console.log(error));