// how to use prototype in real world 
// We are going to use prototype to add properties in function.

function person(name, age, gender) {
    user = Object.create(person.prototype);       // if you don't find any property here check person prototype and print it. 
    user.name = name;
    user.age = age;
    user.gender = gender;
    return user;
}

person.prototype.about = function () {
    console.log(this.name, this.age)
}

person.prototype.sing = function () {
    console.log(`my gender is ${this.gender}`)
}


const user1 = person("Veer", 22, "Male");
console.log(user1);
user1.about();
user1.sing();

const user2 = person("Dhara", 18, "Female");
console.log(user2);
console.log(user2.name);
user2.about()
user2.sing()