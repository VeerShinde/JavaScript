// Object
// objects are reference type like array
// In objects keys are string or symbol data type.
// How to make object
const info = {
    name: "Veer",
    age: 22,
    gender: "Male",
    Hobbies: ["Gym", "Cycling"],
    "Status": "Single"
};

// how to access data from object(key value)
console.log(info);
console.log(info.age);
// we can also access like this
console.log(info["name"]);
console.log(info["Hobbies"]);

// how to add more key value to info
info.fullname = "VeerShinde";
console.log(info);
// we can add like this also
info["mother"] = "Vidya";
console.log(info);


const family = {
    Name: "Veer",
    age: 21,
    Roll_no: 97
};

console.log(family.Name);
console.log(family.Roll_no);
console.log(family["age"]);
console.log(family);

family.gender = "Male";
family["mother"] = "Vidya";
console.log(family);


