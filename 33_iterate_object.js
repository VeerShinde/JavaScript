const person = {
    name: "Veer",
    age: 22,
    gender: "male",
    "person hobbies": ["Swimming", "Cycling"]
}

for (let me in person) {
    console.log(me);
}
// above program will print the key of the object


for (let i in person) {
    console.log(person[i]);
}
// above program will print the values of the object


for (let key in person) {
    console.log(`${key} : ${person[key]}`)
}
// above program will print the key:value pair of the person object.
// we can do it like this also:
// console.log(key," : ",person[key]);

for (let j in person) {
    console.log(person[j]);
}

// object.keys
// search on google
