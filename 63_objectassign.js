// clone using object.assign

const obj = {
    name : "Veer",
    age : 22
}

const obj2 = Object.assign({},obj);
obj.gender = "Male";
console.log(obj)
console.log(obj2)