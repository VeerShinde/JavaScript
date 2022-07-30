// rest parameters

function add(a, b, ...c) {
   console.log(`value of a is ${a}`)
   console.log(`value of b is ${b}`)
   console.log(`value of c is ${c}`)
}

add(1, 2, 3, 4, 5, 6);


// program to sum all the given parameters
function addall(...numbers) {
   let total = 0;
   for (let number of numbers) {
      total = total + number;
   }
   return total
};

let ans = addall(1, 1, 1, 1, 1);
console.log(ans);



