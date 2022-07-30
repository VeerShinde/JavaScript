// find method

const animals = ["Dog", "Cat", "Frog", "doggy"]

function lenght3(string) {
    return string.length === 3;
}

const wildlife = animals.find((lenght3));          // it will see the 1st 3 length string and return it
console.log(wildlife)

const findpet = animals.find((findanimal) => findanimal.length === 5);
console.log(findpet)

const user = [
    { userid: 1, username: "Veer" },
    { userid: 2, username: "Vidya" },
    { userid: 3, username: "kunal" }
]

const findid = user.find((users) => users.userid === 1);
console.log(findid)

const findid2 = user.find((user1) => user1.username.length === 5);
console.log(findid2)

