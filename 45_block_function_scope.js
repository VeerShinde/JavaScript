// block scope vs function scope

// let and const are block scope
// var is a function scope

// block scope eg:-

{
    let name = "Veer";
    // we can only access name in this block, if we try to access outside the block this will give error.
    console.log(name);
}

console.log(name);          // this will not print anything, because let is a block scope.

{
    const lastname = "Shinde";
    // we can only access lastname in this block, if we try to access outside the block this will give error.
    console.log(lastname);
}

// console.log(lastname);      // this will give error, because const is a block scope.

{
    var fullname = "Veershinde";
    // we can use fullname outside the block because it is made using var keyword, var is a function scope.
    console.log(fullname);
}

console.log(fullname);

fullnam = "Veershind"
function myapp() {
    if (true) {
        let nam = "Veer";
        const lastnam = "Shinde"
        var fullnam = "Veer shinde";
        console.log(nam);
        console.log(lastnam);
        console.log(fullnam);
    }
    {
        console.log(nam);
        console.log(lastnam);
        console.log(fullnam);
    }
}



