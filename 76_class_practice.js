class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating and his age is ${this.age}`)
    }

    iscute(){
        console.log(this.age < 20);
    }

    cute(){
        console.log(true)
    }
}

const user1 = new Animal("Elephant", 15);
user1.eat();
user1.iscute()
user1.cute();
console.log(user1);
