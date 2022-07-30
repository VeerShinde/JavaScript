// methods 
// function inside function
// this keyword

const person = {
    name : "Veer",
    Age : 22,
    about : function(){
        console.log(`my name is ${this.name} and my age is ${this.Age}`);
    }
}

console.log(person.about());       // we have to call about as function

// so 'this' keyword find the name and age in the particular defined object.
// we can also do like this

function dhanashree(){
    console.log(`my name is ${this.name} and my age is ${this.age}`)
};
// if we just call the above function the name and age will be undefined.

const person1 = {
    name : "Dhara",
    age : 18,
    about : dhanashree
}

person1.about();         //call about as a function

const person2 = {
    name : "Vidya",
    age : 49,
    about : dhanashree
}

console.log(person2.about())          //call about as a function