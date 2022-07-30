class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`my name is ${this.name} and i am eating`);
    }
}

// we are going to use inhertance, means we will make another class and and that class has animal properties.
// syntax: class    dog     extends      Animal
// base class         // parent class
class dog extends Animal {                       // extends will inheritance animal class inti dog class
    // here you can see there is nothing here still it will print name and age.
}

// making object/instance of dog class 
const ronnie = new dog("Veer", 22);
console.log(ronnie);




