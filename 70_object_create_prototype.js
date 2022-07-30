// function returning object

function personinfo(name, age, gender, weight, height){
    user = {};
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.weight = weight;
    user.height = height;
    user.about = function(){
        console.log(`my height is ${this.height} and my weight is ${this.weight}`)
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = (personinfo("Veer", "22", "male", 54 , 5.3,))
user1.about();
console.log(user1);
console.log(user.is18());
const user2 = (personinfo("Kunal", "24", "male", 70 , 5.5,));
console.log(user2)

// so this is very wrong way if we are making methods in object, because every new user come and for every new user new memory will take place, for eg if there are 1million users, so 1million memory will be used, so to avoid this we can do like this.
// declare all methods in another function.
const usermethods = {
    about : function(){
        console.log(`my height is ${this.height} and my weight is ${this.weight}`)
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function person(name, age, gender, weight, height){
    const user = {};
    user.name = name;
    user.age = age;
    user.gender = gender;
    user.weight = weight;
    user.height = height;
    user.about = usermethods.about;      // this will not take memory this take the reference of usermethods methods.
    user.is18 = usermethods.is18;        // this will not take memory this take the reference of usermethods methods.
    return user;
}

user3 = person("Dhara", 18, "Female", 45, 4.9);
console.log(user3);
user3.about(); 


// so there there is another problem, what if we make to make 1000 methods in usermethods so it can happen we will forget to add that method in person function.

const obj = {
    key1 : "value1",
    key2 : "value2"
}

// so now i am going to code a program where if obj2 dont have key1 then he will go to obj and find does key1 exist here if present he will print it.
// so there is another way to make empty object.
const obj2 = Object.create(obj)          // so obj2 will be empty object.
obj2.key3 = "value3";                    // now obj2 has one key value.
console.log(obj2.key1)                   // first he will find key1 in obj2 if find then print, otherwise he will go to obj and find there if find then print.

console.log(obj2);         // so in output with obj2 there is one word [[prototype]]/__proto__(both are same), so obj2 [[prototype]]/__proto__  is obj because of object.create 
console.log(obj2.__proto__); //here you can see.


// so now we will solve this problem
// so there there is another problem, what if we make to make 1000 methods in usermethods so it can happen we will forget to add that method in person function.

const usermethods2 = {
    about : function(){
        console.log(`id is ${this.id} and rollno is ${this.rollno}`)
    },         // this is a object so we need to add comma here.

    age : function(){
        return this.age >= 18;
    }
};

// so here we have not added usermethods2 methods in person3 still it will find because of object.create.

function person3(id, rollno, div, std, age){
    const user4 = Object.create(usermethods2);
    user4.id = id;
    user4.rollno = rollno;
    user4.div = div;
    user4.std = std;
    user4.age = age;
    return user4;
}

const printdata = person3("3", "97", "A", "15th", "22");
console.log(printdata);
printdata.about();
console.log(printdata.__proto__)  // usermethods2 is person3 __proto__.