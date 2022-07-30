// super keyword 

class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}

class dog extends animal {
    constructor(name, age, speed) {
        super(name, age)               // here we are saying that using super keyword name and age will be manage by animal class.
        this.speed = speed;
    }

    info() {
        console.log(`i have modified eat: ${this.name}`);
    }

    run() {
        console.log(` I am ${this.name} and i run at a speed of ${this.speed}`);
    }
}

const tommy = new dog("Ronnie", 3, "30kmph");
console.log(tommy);
tommy.run();
tommy.info();               // So now tommy will find info method in dog class first if find then print, otherwise he will go to animal class and find info if find then print.

