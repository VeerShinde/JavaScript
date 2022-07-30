// trim()

// spaces also counted in length
// trim() ex:
// Suppose there are space before and after the string.
// For ex:
let firstName = "    Veer    ";
console.log(firstName.length);  // 12
// and i want to remove that spaces, use trim method.
console.log(firstName.trim());    // This will make a new string not change the original string.
console.log(firstName.length);

// if you want to change the original string.
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);   // 4
// this will change the original string

// practice again
let lastname = "    SHinde    "
console.log(lastname.trim());
console.log(lastname.length);

lastname = lastname.trim();
console.log(lastname.length);




