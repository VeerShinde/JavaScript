// computed properties

const key = "object1";
const key2 = "object2";

const value = "myvalue1";
const value1 = "myvalue2";

const person = {}

person[key] = value;
person[key2] = value1;

console.log(person);
// above one is 1 example

const me = {
    [key]: value,
    [key2]: value1,
}

console.log(me);
// obove one is 2nd example


const name = "Name";
const age = "Age";

const val = "Veer";
const val1 = 21;

const person1 = {
    [name]: val,
    [age]: val1
}

console.log(person1);

const person2 = {}

person2[name] = val;
person2[age] = val1;

console.log(person2)

