// splice method
// syntax - start, delete, insert

// to delete the element
const items = ["item1", "item2", "item3"];
const deleted = items.splice(2,2);                         // you can also save deleted item
console.log(deleted);
console.log(items);


// to insert item
items.splice(0,0,"item0");
console.log(items);


// insert and delete together
items.splice(0, 1, "item4", "item5");
console.log(items);

