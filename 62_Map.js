// map 
// map is an iterable
// store data in ordered function
// store key value pair like object
// duplicate keys are not allowed like objects
// in maps you can use anything as key like array, string, number.


const person = new Map();
person.set("firstname", "Veer");
//             key       value
person.set("mothername", "Vidya")
console.log(person);

// the difference between object and map is in object key is always string or symbol, but in map we can give key as any datatype.
// for eg.
person.set(22, "twentytwo");
person.set(["name", "age"], "Veer 22");
//              key           value
console.log(person);

console.log(person.get("firstname"));
console.log(person.get(22));
console.log(person.keys())
for (let key of person.keys()) {
    console.log(key, typeof key);
};

for (let [key, value] of person) {
    console.log(key, value);
};

// we can direct make a key value using map
const info = new Map([
    ["Firstname", "Veer"],
    ["Age", 22]
    ["DOB", "Gender", 19 - 05 - 2000, "Male"]
]);

console.log(info);

const mom = {
    Name: "Vidya",
    Age: 50
}

const extrainfo = new Map();
extrainfo.set(mom, { weight: 50, height: 4.6 });
console.log(mom.Name);
console.log(mom.Name);
