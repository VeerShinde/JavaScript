// How this keyword work in events

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function () {
    console.log("You clicked more");
    console.log("you clicked");
    console.log(this)
})
// so in normal function use, 'this' value will be the own button, it will print the button element. like this: <button class="btn btn-headline">Learn More</button>.


// lets see how does it work with arrow function
const button = document.querySelector(".btn-headline");
button.addEventListener("click", () => {
    console.log("You clicked more");
    console.log("you clicked");
    console.log(this)
});
// In arrow function 'this' will return window object. 