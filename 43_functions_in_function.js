//  functions in function
// we can add as many functions as you want in one function
// For eg:
function device() {
    const addtwonum = (num1, num2) => num1 + num2;

    const multwonum = (num3, num4) => {
        return num3 * num4;
    }

    const divtonum = (num5, num6) => num5 / num6;

    const birthday = function () {
        console.log("happy birthday");
    }

    console.log("Veer Shinde")
    console.log(multwonum(5, 5));
    console.log(birthday());
}

device();