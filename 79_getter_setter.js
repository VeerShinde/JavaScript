// getters and setters

class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };

    get info() {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }

};

const user1 = new person("Veer", 22, "Male");
console.log(user1);
user1.info                      // we have not added '()' after info so this will return the complete function like this: ƒ                               info(){
// console.log(`my name is ${this.name} and my age is ${this.age}`)
// }
// so if we want that without parenthis() class should return only what we want as return
// so for this we are going to use get keyword, this will behave method as a property.
// and we are going to use get keyword before method name.


// setter 
// after making and object we want to change name.
// we can do this using set keyword.
// so we have to make another method name anything you want and add property which you want to change.
// and then while calling them change name and age.

class person1 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };

    get info() {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }

    setName(name, age) {
        this.name = name;
        this.age = age;
    }
};

const user2 = new person1("Vidya", 49, "Female")
user2.setName("Kunal", 24);
console.log(user2)
//  we can also do like this
user2.name = "Dhara";
user2.age = 18;
console.log(user2)
// use whatever you want

// where can i use set method
// what if we want to change name and age.
// for eg: fullname = "Kunal 24", output should be name = "Kunal" age = 24

class person2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    };

    get info() {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }

    set fullname(fullname) {
        const [name, age] = fullname.split(" ");                 // we have used destructuring here.
        this.name = name;
        this.age = age;
    }
};

const user3 = new person2("Veer", 22, "Male");
console.log(user3);
user3.fullname = "Kunal 24";
console.log(user3);