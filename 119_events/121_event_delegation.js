// event delegation
// event delegation says that, jevha tu fakta tujha grandparent vr event lavnar aani aani tu child vr click kela tari grandparent listen(call) honar.
// that means we don't need to add event on everyone.


const grandparent = addEventListener("click", (event) => {
    console.log(event.target)  // this will tell you on which box you have clicked.
    console.log("you called grandparent");
});

// now even if you clicked on child/parent it will print 'you called grandparent', this is called delegation.