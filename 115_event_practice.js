// whenever i click on button 1, button background should change in yellow and text in grey.

const btn1 = document.querySelectorAll("button");
for (let btn of btn1) {
    btn.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "grey";
    });
};

