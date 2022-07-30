// function returning function

function birthday() {
    function hello() {
        return "Hello-hi"
    }
    return hello;
}

const ans = birthday();
// console.log(ans);
console.log(ans());      // now ans variable become "hello" function.


