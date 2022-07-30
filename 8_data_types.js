// string - "veer"
// number - 5, 10.5
// booleans - true, false
// undefined - const veer;
// null - const kunal = null
// Bigint
// symbol


let name = "Veer";
console.log(typeof name);     // This is the method to check datatype of a value.

let age = 22;
console.log(typeof age);

// how to convert number to string, 2 ways
let typecast = age + "";
console.log(typeof typecast);           // Now age is string, eg: "22"

age = age + "";
console.log(typeof age)

age = String(age);
console.log(typeof age);

// how to convert string to number, 2 ways

let lastName = "shinde";
console.log(typeof lastName);
lastName = +lastName;             // this is string, writing + at start will convert it into number.
console.log(typeof lastName)      // Now lastName is number

n = "veer";
n = Number(n);
console.log(typeof n);

// undefined datatype
// when you make variable but don't assign value to it.
// So it's data type is undefined
// for eg:
let nam;               //datatype undefined
var ae;                //datatype undefined
// const fullname;      // this will throw error because const don't allow to assign value later.


console.log(typeof nam);
console.log(typeof ae);

// you can assign value afterwards in undefined.

nam = "veershinde";
console.log(typeof nam)   // now data type is string.
console.log(typeof nam, nam)   // print nam datatype and nam value


// null datatype
// null means nothing empty, we can give value whenever we want

let clg = null;
console.log(clg)     // null

// if you find the data type of "clg" it will not show null it will show object,this is the javascript bug they are not fixing it because the code written in past by js developers will crash.
console.log(clg, typeof clg)


//bigint
// If you are dealing with very big values use bigint.
let numb = 12123456789123124567;
console.log(typeof numb);

// how to make number as bigint
let number = BigInt(12345678912345678);
console.log(typeof number);

// you can't add number and bigint together
// for eg:
// n = 12341234;
// m = BigInt(123456789);
// k = n + m;
// console.log(k);             // this will throw error.


// Boolean datatype
// true and false
















