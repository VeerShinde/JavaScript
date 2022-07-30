// Inner html
// lets understand inner html from this code.



{/* <body>
    <header class="header">
        <nav class="nav container">
            <h1 class="logo">Website</h1>
            <ul class="nav-items">
                <li class="nav-products"><a href="#Home">Home</a></li>
                <li class="nav-products"><a href="">Todo</a></li>
                <li class="nav-products"><a href="">About Us</a></li>
            </ul>
        </nav>

// the innerhtml of class nav container is from h1 to ul closed.

    </header>

    <section class="section-todo container">
        <h2 id="main-heading">Your Plan for today?</h2>
        <form class="form-todo">
            <input type="text" name="" id="" placeholder="Add Todo">
            <input type="submit" value="Add Todo" class="btn">
        </form>
</section> */}

// The inner html of section is from h2 to form close. 

// So how can we print innerhtml of the elements

const inner = document.querySelector(".headline")
console.log(inner)
console.log(inner.innerHTML);    // o/p: <h1>Manage your Task</h1>
//      <button class="btn btn-headline">Learn More</button>

// we can also change innerhtml
inner.innerHTML = "<h1>Inner HTML Changed</h1>";                  // "Manage you Task" will change to "Inner HTML Changed".
console.log(inner.innerHTML);

