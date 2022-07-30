// Intro to events
// what is events:
// Events meaans some work means when you click on something what should happen, when you hover mouse over somthing what should happen.

// Lets practice events
// there is one button in website 'learn more' i want when i click on that button something should happen.

// There are 3 ways to add events.
// 1st way
// direct write code in html file like this:
<button class="btn btn-headline" onclick="console.log('You clicked me')">Learn More</button>
// so when i click on learn more button now, In console it will print 'You clicked me', with number how much time you have clicked button.
// This is called the event is firing.
// But this is very old way to add event we are not going to use this way.


// 2nd way
// select that button first:
const btn = document.querySelector(".btn-headline");
console.log(btn);
btn.onclick = function () {
    console.log("You Clicked me")
};
// this is also the wrong way because we can't assign click event more than one.


// 3rd way
const button = document.querySelector(".btn-headline");
// here eventlistner take 2 parameters, 1st which event you want to used, 2nd what you want to do with using that event.
// you can use arrow function or any type of function.
button.addEventListener("click", () => {
    console.log("You clicked me");
});
// right way to use events.

