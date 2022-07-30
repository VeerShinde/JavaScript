// parameter destructuring

const person = {
    name: "Veer",
    age: 22,
    gender: "Male"
}

function printdetails({ name, age, gender }) {
    console.log(name);
    console.log(age);
    console.log(gender);
}

printdetails(person);