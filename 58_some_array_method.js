// some method
// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method does not change the original array.

const name = ["Veer", "Chirag", "Vidya", "Tanmay"];
const names = name.some((find) => find.name === "Veer");
console.log(names);        // false

const amazon = [
    { productid: 1, product: "Mobile", price: 15000 },
    { productid: 2, product: "TV", price: 20000 },
    { productid: 3, product: "Laptop", price: 120000 }
]

const money = amazon.some((finding) => finding.price > 100000);
console.log(money)         // true
