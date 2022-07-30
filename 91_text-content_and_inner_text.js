// text-content
// file 86 linked
// here id main-heading content is 'Your plan for today', what if you want to change that sentence to something else, here to change content of the website text-content is used.
const mainheading = document.getElementById("main-heading")
console.log(mainheading.textContent);     // to check before and after effect
mainheading.textContent = "Veer Shinde";  // i have changed 'your paln for today' to 'Veer Shinde'
console.log(mainheading.textContent);

// here if you hide your content in website using display none still in console text-content will show the content but it will not visible in website.


// inner-text
// here inner text will show only that content which is visible if you give display none, so that will be not shown in console.
// Same syntax
const mainhead = document.getElementById("main-heading")
console.log(mainhead.innerText);     // to check before and after effect
mainhead.innerText = "Veer Shinde";  // i have changed 'your plan for today' to 'Veer Shinde'
console.log(mainhead.innerText);

// interview question: explain textContent and innerText.