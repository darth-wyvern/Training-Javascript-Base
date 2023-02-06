
/* ______________________________________________ var, let, const ______________________________________________*/

/* block-scope: declare once in single scope
 * variable declare moved to top of scope before execution
 */

// ------------- var -------------
// declare everywhere and multiple times in scope because it have attribute globally/locally scoped
// hoisting

// example:
console.log(`------ var ------`)
var samurai;
console.log(samurai);

var samurai = "you can't die if you don't live once"
console.log(samurai); // you can't die if you don't live once

var samurai = "do you understand?"
console.log(samurai); // do you understand?
console.log("\n")


// ------------- let -------------
// block-scope
// hoisting

// example:
console.log(`------ let ------`)
let ninja;
console.log(ninja); // undefined

ninja = 'there is so much thing as randomness';
console.log(ninja); // there is so much thing as randomness
console.log("\n")

// let ninja; // if you declare multiple times => Uncaught SyntaxError (block-scope)


// ------------- const -------------
// block-scope
// with primitive (string, number, boolean, null and undefined) then not change value
// with reference (object, array, function) although not redeclared but we can update attribute value

// example:
console.log(`------ const ------`)
const animal = {
  tiger: 'walk',
  dragon: 'fly'
}

// animal = {}; // Uncaught TypeError: Assignment to constant variable.

console.log(animal) // object reference (animal.tiger = 'walk')

animal.tiger = 'swimming';

console.log(animal) // object reference (animal.tiger = 'swimming')
console.log("\n")


/* ______________________________________________ Regular functions and arrow functions ______________________________________________*/

// ------------- syntax -------------
console.log(`------ [syntax] regular vs arrow function ------`)
/**** ES5 Regular Function ****/
let hello = function () {
  console.log(`hello everyone`)
}
hello(); // hello everyone

/**** ES6 Arrow Function ****/
let sum = (a, b) => (a + b)
console.log(sum(1, 2)) // 3

// => Arrow Function clear code than Regular Function
console.log("\n")

// ------------- this -------------
/** this binding: 
 * Arrow functions inherit the this value from their surrounding scope, 
 * whereas regular functions have their own this keyword, 
 * which is dynamically scoped.
 */

console.log(`------ [this] regular vs arrow function ------`)

let ThisExample = {
  name: "UchihaRocket",
  regular: () => {
    console.log(this.name, ` // no data arrow function because no 'this' binding here`)
    console.log("hello " + this.name); // no 'this' binding here (binding in user => ThisExample.name == "UchihaRocket")
  },
  arrow() {
    console.log("Welcome to " + this.name); // 'this' binding works here 
  }
};
ThisExample.regular();
ThisExample.arrow();
console.log("\n")

// ------------- arguments -------------
/** Arrow functions do not have access to the arguments object, 
 * whereas regular functions do. 
 * Instead, they receive their arguments as a list of values. 
 */

console.log(`------ [arguments] regular vs arrow function ------`)

/**** Regular Function ****/
console.log(`regular function: `)
let userRegular = {
  show_argument() {
    console.log(...arguments);
  }
};
userRegular.show_argument(1, 2, 3); // 1 2 3

/**** Arrow Function ****/
console.log(`arrow funtion: `)
let userArrow = {
  show_argument: () => {
    console.log(...arguments);
  }
};
// userArrow.show_argument(1, 2, 3); // Uncaught ReferenceError: arguments is not defined
console.log("\n")

// ------------- new -------------
/**
 * new keyword: Arrow functions cannot be used with the new keyword to create objects, 
 * as they do not have a prototype property.
 */

console.log(`------ [new] regular vs arrow function ------`)

/**** Regular Function ****/
let regularNew = function () {
  console.log(arguments);
};
new regularNew(1, 2, 3); // 1 2 3 and prototype

/**** Arrow Function ****/
let arrowNew = () => {
  console.log(arguments);
};
// new arrowNew(1, 2, 3); // Uncaught TypeError: arrowNew is not a constructor
console.log("\n")

/**
 * used:
 * Arrow function: short, anonymous functions
 * Regular function: complex, reusable functions
 */


/* ______________________________________________ Spread và rest operator ______________________________________________*/

/**
 * syntax: `...` + {name array}
 * Represents an array
 */

/*** Array ***/
console.log(`------ [array] Spread ------`)
let array1 = [1, 2, 3]
let array2 = [...array1, 4, 5]
console.log(array2) // [1, 2, 3, 4, 5]
console.log("\n")

/*** Function ***/
console.log(`------ [Function] Spread ------`)
// example 1:
let numbers = [1, 2, 3]
let max = Math.max(...numbers)
console.log(max) // 3

// example 2:
function addList(list, ...args) { // rest parameter have to pass in end of list-parameter of function
  args.forEach((arg) => list.push(arg))
  return list;
}

console.log(addList([1], 2, 3)) // [1, 2, 3]
console.log("\n")

/*** Object ***/
console.log(`------ [Object] Spread ------`)
let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { ...obj1, d: 99 }
console.log(obj2)
console.log("\n")


/* ______________________________________________ Destructuring javascript ______________________________________________*/

/**
 * Destructuring is syntax to get attributes of object or element of array,
 * make the code better.
 */

/*** Variable assignment ***/
console.log(`------ [Variable assignment] Destructuring javascript ------`)
const rest = [1, 2, 3, 4]
const [a, b, c] = rest
console.log(a, b, c) // 1, 2, 3
console.log("\n")

/*** Swapping ***/
console.log(`------ [Swapping] Destructuring javascript ------`)
var swap1 = 1;
var swap2 = 2;
var [swap1, swap2] = [swap2, swap1];
console.log(`swap1: ${swap1}, swap2: ${swap2}`)
console.log("\n")

/*** Ignoring values ***/
// 
var IgnoringA = 0, IgnoringB = 1
const ignoring = () => [1, 2, 3]
const [IgnoringA, , IgnoringB] = ignoring()
console.log(IgnoringA, IgnoringB); // 1, 3

/*** Assignment to new variables ***/
const res = { blog: 'abc.com', type: 'javascript' }
const { blog: nameBlog, type: newType } = res;
console.log(nameBlog, newType); // abc.com, javascript

/***  Nested object ***/
const blogs = {
  anonystick: [
    {
      pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {
  anonystick: [
    {
      pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;

console.log(namePage, numLikes, numDaily); // Tip javascript Viet Nam, 4789, 1323

// namePage, numLikes, numDaily get value from `blog object`

/*** array destructuring ***/
// i think still don't understand it !!!

