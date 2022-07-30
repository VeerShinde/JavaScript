class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    aboutme() {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    };

    static mineage() {
        console.log(`My current age is 22`);           // you can't call properties in static method, for eg: this.name. this.age
    };
};

person1 = new Person("Veer", 22);
console.log(person1);
person1.aboutme();
// person1.myage()        // this will give error because static mathod will need to call with their class name, insted of instance(person1) name.
Person.mineage();         // while calling static method use class name.