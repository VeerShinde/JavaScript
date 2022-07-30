// class: Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
// syntax:
// class classname{

// }

class usernames {
    constructor(name, age, gender) {              // constructor is used make objects, to take arguments  
        console.log("constructor called")
        this.name = name;
        this.age = age;
        this.gender = gender;
        // no need to return because we are going to use new keyword.
    }

    about() {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }

    sing() {
        console.log("hureeee");
    }

    sum(a, b) {
        console.log(a + b)
    }
}

const user1 = new usernames("Veer", 22, "Male");                     // always use new keyword, because it will access the constructor and it will create object, return it, and access to prototype.
const user2 = new usernames("Dhara", 18, "Female");
console.log(user1)
console.log(user2.name);
user2.sing();
user1.about()
user1.sum(2, 2)

// to see the prototype of any user.
console.log(Object.getPrototypeOf(user2));                    // this will tell the prototype of particular given user