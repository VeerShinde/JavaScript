// keypress event 
// keypress events let us know when user is on website and if he pressed any key from his keyborad for eg: a, b ,d, A, ect. So keypress event let us know which key is pressed by user.

const body = document.body;

body.addEventListener("keypress", (event) => {
    console.log(event)
})
// this will return the very big object and it that object there is one, key: keypressed_name
// if you directly want to see which key is pressed
// const body = document.body;

// body.addEventListener("keypress", (event) => {
//     console.log(event.key)
// })