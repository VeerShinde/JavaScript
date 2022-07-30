// filter method
// filter method should always return in true or false(boolean value)
const arr = [1, 2, 3, 4, 5];

const iseven = function (numb) {             // we are using callback function here
    return numb % 2 === 0;
}

// this will make a new array and push all the even number in that array, if the above program gives true.
const even = arr.filter(iseven)
console.log(even)


const isodd = function (numb) {
    return numb % 2 !== 0;
}

const odd = arr.filter(isodd)
console.log(odd)


const plus = (numb) => {
    return numb === 3;
}

const plusis = arr.filter(plus)
console.log(plusis);

const onenum = arr.filter((numberrss) => {
    return numberrss === 1;
})

console.log(onenum);