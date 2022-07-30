import { firstname as fname } from "./utils/fname.js"
import { age } from './utils/age.js'
import { Person } from './utils/Person.js'

console.log(fname, age);

const person = new Person("Kunal", 24);
person.info();
