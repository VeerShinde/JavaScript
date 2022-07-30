// new keyword

function person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

// new keyword do three things:
// 1) create empty object(this) like this:- this = {}
// 2) return object(this).  
// 3) direct access to prototype object if not found in function.

const user1 = new person("Veer", 22, "Male");
console.log(user1)

person.prototype.about = function(){
    console.log(this.name, this.age);
};

user1.about()

// how to use new keyword in real world application

function person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

person.prototype.about = function(){
    console.log(this.name, this.age)
}

person.prototype.sing = function(){
    console.log(`my gender is ${this.gender}`)
}


const user2 = new person("Dhara", 18, "Female");            // add new keyword here, this will create object "this", and also return this object and direct access to prototype of person.
console.log(user2);
user2.about();

// how to print key of the function
for(let key in user2){
    console.log(key);
};
// so this will print all the key including prototype properties.

// So to print only person key not prototype
for(let k in user2){
    user2.hasOwnProperty(k);
};



