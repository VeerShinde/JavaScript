// lexical scope

const myvar = "kunal";

function myapp() {
    var myvar = "SHinde";

    const pc = () => {
        console.log("Veershinde");
    }
    console.log(phone)

    function phone() {
        const myvar = "Veer";
        console.log(myvar);
        pc();
    }

    console.log(myvar)


    phone();
}

const veerShinde = () => {
    let obj = {
        name: {
            "location": 'Panvel'
        }
    }
    let obj2 = { [obj.name]: 'kunal' }

    console.log(obj)
    console.log(obj2)
}

// so,when we call function phone he will search for myvar in his own environment(function) if he find it will print the value, and if he don't find myvar in his own function, then he will search in myapp if find then print, even if he doesn't find myvar in myapp, then he will search in global scoping if find, then print or nothing will happen.
veerShinde()
myapp();
