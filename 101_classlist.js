// classlist will show us how many class we have given to the selected element.
const section = document.querySelector("section")
console.log(section.classList);

// you can add class using js
section.classList.add("bg-color");    // this will add the class bg-color, but to give styling you have to go to css file.
console.log(section.classList);

// you can remove class using js
section.classList.remove("bg-color");
console.log(section.classList)

// if you want to see does this class exist
const exist = section.classList.contains("container");
console.log(exist);    // true

// toggle class, toggle will if class exist if exist then toggle will remove it, and if it not exist then toggle will add that class.
section.classList.toggle("bg-dark");  // this will add the class bg-dark.
section.classList.toggle("bg-dark");  // this will remove the class bg-dark, because it already exist.




