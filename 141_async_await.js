// async await

const URL = "https://jsonplaceholder.typicode.com/posts";



// fetch(URL)
//     .then((response) => { return response.json() })
//     .then(data => console.log(data))




async function hello() {
    const response = await fetch(URL)         // await keyword, will wait until the promise resolve/reject.
    const data = await response.json()        // json return promise, so i can give await it will wait until it resolve.
    console.log(data)
}

hello()
    .then(mydata => console.log(mydata))
    .catch(error => console.log("Something went wrong"))

