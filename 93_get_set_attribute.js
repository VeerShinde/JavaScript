// get and set attribute

// getAttribute is used to get the attribute of given element.
const mainheading = document.querySelector("a")
mainheading.getAttribute("href");         // this will give the href value of 1st seen anchor tag(a).
// output will be: #Home

const form = document.querySelector(".form-todo input");
form.getAttribute("type")        // output will be: text


// how can we change attribute value:
// using setAttribute

mainheading.setAttribute("href", "https://google.com");            // href value changed to https://google.com.
mainheading.getAttribute("href");  // called to check







