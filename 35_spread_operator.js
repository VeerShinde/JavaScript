// spread operator
// spread operator is used to merge many variable together.
// for eg:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

let newarray = [...array1, ...array2, 7, 8, 9];
console.log(newarray);


const number = [..."123456789"];
console.log(number);

// to merge two object

const obj1 = {
    object1: "value1",
    object2: "value2",
}

const obj2 = {
    object3: "value3",
    object4: "value4",
}

const newobject = { ...obj1, ...obj2, object5: "value5" };
console.log(newobject);

const myobj = { ..."abc" };
console.log(myobj)             // this will automatically give key 0 to a and 1 to b and so on.


const num = [..."123456767"]
console.log(num)

const fruit = {
    name: "Apple",
    breed: "indian",
}

const fish = {
    age: 4,
    size: "large",
}
const food = { ...fruit, ...fish };
console.log(food);


const newbject = { ...["item1", "item2"] };
console.log(newbject);