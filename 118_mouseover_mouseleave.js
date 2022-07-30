// mouseover 
// mouseover event lets us know does user hover on that particular element on which we have given mouseover event.

const mainbutton = document.querySelector(".btn-headline");
mainbutton.addEventListener("mouseover", () => {
    console.log("Mouseover event Occured!!!!")
});


// mouseleave
// mouseleave event let us know when user remove his cursor from that particular element which we have given mouseleave event.

const mbutton = document.querySelector(".btn-headline");
mbutton.addEventListener("mouseleave", () => {
    console.log("Mouseleave event Occured")
});


// const btn = document.querySelector("button");
// const body = document.body;
// const currentcolor = document.querySelector(".current-color");


// function randomColorGenerator() {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomcolor = `rgb(${red}, ${green}, ${blue})`;
//     return randomcolor
// };

// btn.addEventListener("click", () => {
//     randomcolor = randomColorGenerator();
//     body.style.background = randomcolor;
//     currentcolor.textContent = randomcolor;
// });