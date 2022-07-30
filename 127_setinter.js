// 

const body = document.body;
const button = document.querySelector("button");
const intervalid = setInterval(() => {
    const red = Math.floor(Math.random() * 126);
    const green = Math.floor(Math.random() * 126)
    const blue = Math.floor(Math.random() * 126)
    const rgb = `rgb(${red}, ${green}, ${blue})`        // this is how color will be generated rgb(122,34,56), this is what we need.
    body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
    clearTimeout(intervalid);
    button.textContent = body.style.background;
});


