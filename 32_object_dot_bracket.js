// difference between dot and bracket notation in objects

const key = "email";
const person = {
    name: "Veer",
    age: 22,
    "person hobbies": ["swimming", "football"]        // if you want to add key which contain space put them in double quotes.
}

person.name = "kunal";    // dot is used in this way and many other ways.
console.log(person["person hobbies"]);
person[key] = "veershinde195@gmail.com";      // to take key from already initialized array/variable and add them in person(object).
console.log(person);





