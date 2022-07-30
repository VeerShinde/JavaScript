// objects inside array
// very useful in real world application

const personal_info = [
    { userid: 1, name: "Veershinde", age: 22 },
    { userid: 2, name: "Kunalshinde", age: 25 },
    { userid: 3, name: "Dharadave", age: 18 },
];

console.log(personal_info);

for (let user of personal_info) {
    console.log(user.userid);
    console.log(user.name);
    console.log(user.age);
};

