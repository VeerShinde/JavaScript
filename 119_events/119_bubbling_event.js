// event bubbling
// event bubbling is means when we click on child event, his all parents events also get called. but parents need to have events.
// lets understand by code

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", () => {
    console.log("you called grandparent")
});

parent.addEventListener("click", () => {
    console.log("you called parent")
});

child.addEventListener("click", (event) => {
    console.log("You called child")
});

// if you click on parent then parent and grandparent get called.
// this happening because browser check that does his parents have same event, if yes he bydefault callback all theat event.

// event.stopPropagation()      // to stop bubble-event, place this in that particular element.