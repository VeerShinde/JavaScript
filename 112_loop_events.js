// by using loop i have given event for all three button.

const allbtn = document.querySelectorAll(" .my-btn button");
console.log(allbtn)
for (let btn of allbtn) {
    btn.addEventListener("click", () => {
        console.log("You clicked me");
    })
};

for (let i = 0; i < allbtn.length; i++) {
    allbtn[i].addEventListener("click", function () {
        console.log(this);
    });
};

allbtn.forEach(function (button) {
    button.addEventListener("click", () => {
        console.log("You clicked me");
    })
});