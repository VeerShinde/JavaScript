// reduce method
// this method is useful to calculate sum of given numbers

const num = [1, 2, 3, 4, 5, 6, 8];

const sum = num.reduce((accumulator, currentvalue) => {           // we use callback function in reduce method
    return accumulator + currentvalue;
});

console.log(sum)

// So how does reduce work
// accumulator   currentvalue     return
//      1             2              3
//      3             3              6
//      6             4              10
//      10            5              15
//      15            6              21
//      21            8              29

// so sum returns 29.


const amazon = [
    { productid: 1, product: "Mobile", price: 12000 },
    { productid: 2, product: "TV", price: 20000 },
    { productid: 3, product: "Laptop", price: 30000 }
]

const price = amazon.reduce((totalprice, currentproduct) => {
    return totalprice + currentproduct.price;
}, 0)

console.log(price)

// So how does this work
// totalprice    currentproduct     return
//     0             12000           12000
//    12000          20000           32000
//    32000          30000           62000

// so this will return 62000 