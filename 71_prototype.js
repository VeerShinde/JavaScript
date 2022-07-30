// function ---> object
//javascript function =  function + object
function hello() {
    console.log("Hello world")
};

console.log(hello.name)     // name property tell the function name.

// you can add your own property
hello.myproperty = "myownproperty";
console.log(hello.myproperty);

// Function gives us a free space, that free space is empty object and that object is called prototype.
// prototype - The JavaScript prototype property allows you to add new properties(key value pair) to object constructors.
// prototype only provide only for function nothing else.
// for eg:
function person(name, age, gender) {
    user = {}
    user.name = name;
    user.age = age;
    user.gender = gender;
    return user;
}

// syntax to add properties in function.
person.prototype.nationality = "Indian";
person.prototype.course = "BTTM";
person.prototype.sing = function () {
    console.log("Hurere");
}
console.log(person("Veer", 22, "Male"))
console.log(person.prototype);                  // to print the prototype of function
console.log(person.prototype.sing())            // to call a added prototype
console.log(person.prototype.course)            // to call a added prototype       
