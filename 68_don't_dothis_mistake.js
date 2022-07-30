const person = {
    name: "Veer",
    age: 22,
    about: function () {
        console.log(this.name, this.age)
    }
}

// don't do this mistake

const info = person.about;
info()        // so this will give undefined because we have just store person 'about' in info so he doesn't know what is name and age. so here we have to bind all person details in info and then print it. like shown in the below program.
const info2 = person.about.bind(person)
info2();


// shorthand way to make object with function
const person1 = {
    name: "Veer",
    age: 22,
    about() {
        console.log(this.name, this.age)
    }
}

person.about();