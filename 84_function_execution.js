// how does function execute

function person(firstname, lastname) {
    console.log(arguments);           // arguments are those which we pass while calling the function. they behave like array.
    console.log(arguments[1]);
    console.log(arguments.length);
    const myvar = "Kunal"
    console.log(myvar)
    let myvar1 = "Shinde";
    console.log(myvar1);
    var combine = myvar + " " + myvar1;
    console.log(combine)
}

person("Veer", "Shinde");

