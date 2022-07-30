// take a look at 97_index.html file before this.
// find notes to see DOM tree

// how to traverse through dom tree
const rootnode = document.getRootNode()         // getrootnode will give me a root node. 
console.log(rootnode);           // document object

// The child of root node is html, there is method to see child node of document
console.log(rootnode.childNodes);  // here we have reached to rootnode child which is html, so its a nodelist so we can do indexing here. 

// so on 0 index there is html so we can call it and access it.
const htmlelementnode = (rootnode.childNodes[0]);  // now we have entered in html which is child node of rootnode(document).
console.log(htmlelementnode);

// now we are going to see html child
const htmlchild = htmlelementnode.childNodes;
console.log(htmlchild);   // childs are head, text, body. text is a newline space between head and body.

// so here we can also access through index on index 0 head, index 1 text, index 2 body.
const headnode = htmlchild.childNodes[0];
console.log(headnode);
const textnode = htmlchild.childNodes[1];
console.log(textnode);
const bodynode = htmlchild.childNodes[2];
console.log(bodynode);

// now i want to see who is the parent of headnode
console.log(headnode.parentNode);  // output will br html
// this is parent relationship

// now lets see sibling relationship
// so what is sibling relationship:
// head, text, body they are siblings because there parent is same(html).
console.log(headnode.nextSibling)  // next sibling is textnode so this will show text.
// to see nextsibling of text:
console.log(headnode.nextSibling.nextSibling);   //sibling is body.


//let's see what is inside textnode.  
console.log(headnode.nextSibling) // so here you can see in data there is /n<space>. the space which is used after head is stored in text.
// if i do directly like this the nextsibling will be body:
{/* <head>
    <title>Dom Traversal</title>
    <script src="/97_Dom_tree.js" defer></script>
</head><body>
    <div class="contaner">
        <h1>My heading</h1>
        <p>Some Info</p>
    </div>
</body> */}
// no space after head and body, but this is not readable that's why we have to give space.


// so why does newline and spaces is not shown in website
// browser bydefault has setting which is 'white-space: normal' that means ignore spaces and new line. if i change 'white-space: pre' using style tag all the spaces will be visible.


// sometimes there are many newline spaces so to find direct next element means after head the next element is body, newlinespaces is not a element so to direct jump on next element there is one property.
console.log(headnode.nextElementSibling);  // this will directly jump on body ignore text.


// Now we are going to see child of headnode
console.log(headnode.childNodes);  // output will be: text, title, text, script, text







