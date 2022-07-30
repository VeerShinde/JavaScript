// Event object

const firstbutton = document.querySelector("#btn1");
firstbutton.addEventListener("click", function (event) {
    console.log(event);
})
// 'this' is the Button 1 in own.

// jevha pn aapan kontya hi element vr eventlistner add kartoh, so we have js engine who execute code line by line, for eg crome browser browser has js engine + some extra features, sp browser has js engine + webapi(some small application which work for us) which help to run code. browser nehmi nazar thevtoh tya element vr jyacha vr aapan event lavun thevlay.
// Jevha browser la kalta ki aapan event perform kela, browser 2 kaam kartoh
// 1) the above callback function, browser, js engine la deto aani boltoh hyala execute kar
// 2) aani tya callback function sobat browser jo event perform jhalay tyachi info pn deto.
// aani mg code run hoto aani execute hoto.
// hi info aaplya ek object cha form madhe bhetnar, which we recieve.


// And how to see that information
// in addeventlistner there is function in that parameter all the info is stored, as a parameter we can give anything, but correct way is we should write event as a parameter and callback in function.
// like this:
// const firstbutton = document.querySelector("#btn1");
// firstbutton.addEventListener("click", function (event) {
//     console.log(event);
// })
// after this when we click on buton 1 all the info the performed event is shown.


// in info there are 2 object which are very useful, 1) target 2) currentTarget
// target: which element has triggered event.
// currentTarget: on which element we have attached our eventlistner.
// to see result:
// const firstbutton = document.querySelector("#btn1");
// firstbutton.addEventListener("click", function (event) {
//     console.log(event.target);
// })

// const firstbutton = document.querySelector("#btn1");
// firstbutton.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
// })

// this will not make sense now, but we will discuss this.