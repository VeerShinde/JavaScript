// prefer notes for detail info

const URL = "https://jsonplaceholder.typicode.com/posts"   //fake API
const xhr = new XMLHttpRequest();      // requeste to backend for data
// console.log(xhr);

// console.log(xhr.readyState)  // 0
xhr.open("GET", URL);                       // telling server, about the request
// console.log(xhr.readyState)  // 1

xhr.onreadystatechange = function () {    // this function will be called on every statechange.
    // console.log(xhr.readyState); 
    if (xhr.readyState === 4) {
        // console.log(xhr.response)  // here we will get data from backend API url.
        const data = xhr.response;
        // now the response datatype is json(string), now i want to parse his datatype and make this js object.
        // js has one library JSON
        const data1 = JSON.parse(data);
        console.log(data1) // now i wil get js objects in 1 list.
        console.log(typeof data1)
    }
}

xhr.onload = function () {              // onload will only run when readystate is 4. no need of if condition what we did in above code.
    console.log(xhr.readyState);
    const data = xhr.response;
    console.log(data)
}

xhr.send(); // request sended

// there is statuscode which shows, this will 