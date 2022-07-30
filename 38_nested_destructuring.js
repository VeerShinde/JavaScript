// nested destructuring

const personal_info = [
    { userid: 1, name: "Veershinde", age: 22 },
    { userid: 2, name: "Kunalshinde", age: 25 },
    { userid: 3, name: "Dharadave", age: 18 },
];

// const [user1, user2, user3] = personal_info;
// console.log(user1);
const [{ name }, , { age }] = personal_info;      // name of personal_info 1st index, age of personal_info 3rd index.
console.log(name);
console.log(age);
const [{ name: name1, userid }, , { age: age1 }] = personal_info; // variable name has been changed, using destructuring
console.log(name1);
console.log(userid);
