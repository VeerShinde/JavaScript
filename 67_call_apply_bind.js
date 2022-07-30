// call, apply, bind ---> interview question
// dot call method
const person = {
    name: "Vidya",
    age: 49,
    about: function () {
        console.log(this.name, this.age);
    }
}

const person1 = {
    name: "Veer",
    age: 22
}

person.about.call(person1);          // if we dont pass anything in call method it will give undefined. it can be asked in interview.
// so in above program we have borrowed person function for person1 using call method.


const person2 = {
    name: "dhara",
    age: 18,
    about: function (gender, height) {
        console.log(this.name, this.age, gender, height);
    }
}


person2.about.call(person1, "male", "5.3");
// in above as shown we can give parameter in object function using call function.



// apply
person2.about.apply(person1, ["female", "5.4"]);  // in apply we write our argument in array thats it.



// bind 
const wrap = person2.about.bind(person1, "others", "6ft");
wrap();
// in bind we bind/wrap our program in any variable and whenever we want to call that we can call it.
