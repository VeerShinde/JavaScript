// every array method
// all the value we are passing should we true or false

const number = [22, 34, 54, 15];

const age = number.every((num) => num.number > 18);
console.log(age)     // this will give false because 15 is not greater than 18

function age1(numb) {
    return numb < 60;
}

console.log(number.every((age1)));   // this will give true because all the elements for less than 60.

const amazon = [
    { productid: 1, product: "Mobile", price: 15000 },
    { productid: 2, product: "TV", price: 20000 },
    { productid: 3, product: "Laptop", price: 12000 }
]

const finded = amazon.every((findprice) => findprice.price < 30000);
console.log(finded)

const findpl = amazon.every((finding) => finding.price < 10000);
console.log(findpl)

