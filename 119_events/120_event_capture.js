// event capturing
// Event capturing is the event starts from top element to the target element. It is the opposite of Event bubbling, which starts from target element to the top element.
// how to add event capturing, addeventlistener("event_name", calback_function, boolean value(true))
// syntax is: 1) event_name. 2) calback function 3) boolean value.
// this boolean value true means we are saying to capture event.

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;

// capturing start
child.addEventListener("click",
    () => {
        console.log("you captured child")
    }, true
);

parent.addEventListener("click",
    () => {
        console.log("you captured parent")
    }, true
);

grandparent.addEventListener("click",
    () => {
        console.log("you captured grandparent")
    }, true
);

body.addEventListener("click",
    () => {
        console.log("you captured body")
    }, true
);
//  capturing end

// capturing start from top to bottom, means if you clicked on child, then browser go to his 1st parent, body then see is capture event is present on body if yes, then he will run body first, then child of body(grandparent), then child of grandparent(parent), then child of parent(child).

// output:
// you captured body
// you captured grandparent
// you captured parent
// you captured child

// if you give bubble event here 
// bubbling start
child.addEventListener("click",
    () => {
        console.log("you bubble child")
    });

parent.addEventListener("click",
    () => {
        console.log("you bubble parent")
    });

grandparent.addEventListener("click",
    () => {
        console.log("you bubble grandparent")
    })

body.addEventListener("click",
    () => {
        console.log("you bubble body")
    });
// bubbling end

// then first capture will run from top to bottom and then bubble will go bottom to top.
// output:
// you captured body
// you captured grandparent
// you captured parent
// you captured child
// you bubble child
// you bubble parent
// you bubble grandparent
// you bubble body



