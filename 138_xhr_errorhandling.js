// error handling when response is not correct.
// when statuscode is beteen 200 and 300 means everyting if fine, if its above 300 or 400 it means something went wrong.

const URL = "https://jsonplaceholder.typicode.com/posts";
const request = new XMLHttpRequest();

request.open("GET", URL);

request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
        const data = request.response;
        const parsed = JSON.parse(data);
        console.log(parsed);
    } else {
        console.log("something went wrong");
    }
}

// if we want to handle error which can cause by network issue
request.onerror = () => {
    console.log("Network error");
}

request.send();