// instead of callback hell/pyramid using promise to change color and text.

const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")
const head7 = document.querySelector(".heading7");


function colorchange(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve()
            } else {
                reject();
            }
        }, time)
    })
}

colorchange(head1, "Heading 1", "red", 1000)
    .then(() => {
        return colorchange(head2, "Heading 2", "blue", 1000)              // returning is imp because next then method will follow that, otherwise it will not follow 1 second of previous then.
    })
    .then(() => { return colorchange(head3, "Heading 3", "brown", 1000) })
    .then(() => { return colorchange(head4, "Headline 4", "yellow", 1000) })
    ;
