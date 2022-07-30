// fetch API 
// better than xmlHttprequest for calling API


const URL = "https://jsonplaceholder.typicode.com/posts";

// console.log(fetch(URL))  // fetch bydefault request a url, get.
// return promise

fetch(URL)
    // if i add this fetchurl in var and console it //this will return Promise
    // means i can use .then on this
    // .then(response => { console.log(response) })
    // this will show many methods, but we want data which is not present here.(json data).
    // we have to call response with json method
    // .then(response => { return response.json() })    //this will parse the data in js object  
    .then(response => {
        if (response.ok) {      // this will be true of false
            return response.json()
        } else {
            throw new Error("Something went wrong");
        }
    })
    .then(data => console.log(data))   // this will print the data from API
    .catch(error => console.log("Inside catch error"));   // this error will only run when there is internet issue in this case.





