// switch statement
// 'break' will break the loop if we dont put break all the values will get print after the condition get right.
let day = +prompt("Enter a number: ");           // + is used to convert string to number

switch (day) {                        // as a input we have to give case number:1, 2, 3, 4
    case 1:
        console.log("Sunday");
        break
    case 2:
        console.log("Monday");
        break
    case 3:
        console.log("Tuesday");
        break
    case 4:
        console.log("Wednesday");
        break
    case 5:
        console.log("Thursday");
        break
    case 6:
        console.log("Friday");
        break
    case 7:
        console.log("Saturday");
        break
    default:
        console.log("Invalid Day");
}


// let year = +prompt("Enter a year");           // as a input we have to give case number: 2000, 2001, 2002

// switch (year){
//     case 2000:
//         console.log("My birth year");
//         break
//     case 2001:
//         console.log("Chirag birth year");
//         break
//     case 2002:
//         console.log("Harshad birth year");
//         break
//     case 2003:
//         console.log("Dhara birth year");
//         break
//     default:
//         console.log("Invalid year");
// }
