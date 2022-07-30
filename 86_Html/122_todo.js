const addtodo = document.querySelector(".form-todo");
const forminput = document.querySelector(".form-todo input[type='text']")
console.log(forminput);
addtodo.addEventListener("submit", (event) => {
    event.preventDefault();   // this will stop reloading pages after submiting.(imp)
    console.log(forminput.value);
    forminput.value = "";
});