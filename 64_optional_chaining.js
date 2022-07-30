// optional chaining

const info = {
    name: "Veer",
    address: { flatno: 402 }
}

console.log(name);
console.log(info.address.flatno);
// if address is not defined in object info and we try to access it that will give error.
// by using optional chaining if we try to access address even if its not defined then this will return undefined not error.
// this situation we face while using react. 
// syntax of optional chaining:-
const person = {
    Name: "Veer : Shinde",
    Gender: "Male",
    address: { panvel: "karanajade" }
}

console.log(person.Name.Veer)        // now if i remove Name from person it will give error but we want undefined.
console.log(person?.address?.address)     // now this will give undefined if i remove address from person object.

// so how does it work?
// it will check does person exist if yes then it will check is address there, if there it will print value othervise give undefined.
