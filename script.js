
/* ______________________________________________ var, let, const ______________________________________________*/

// reference: https://viblo.asia/p/phan-biet-kieu-bien-var-let-va-const-trong-javascript-ORNZqaOnZ0n

/* block-scope: declare once in single scope
 * hosting: variable declare moved to top of scope before execution
 */

// ------------- var -------------
// declare everywhere and multiple times in scope because it have attribute globally/locally scoped
// hoisting

// example: (hoisting)
console.log(`------ [hoisting] var ------`)
console.log(samurai); // undefined

samurai = "you can't die if you don't live once"
console.log(samurai); // you can't die if you don't live once

samurai = "do you understand?"
console.log(samurai); // do you understand?

var samurai; // DECLARED samurai var
console.log("\n")

console.log(`------ [globally/locally] var ------`)
var pokemon = 'pikachu';
console.log(pokemon) // pikachu

updatePokemon('charizard')
console.log(pokemon) // charizard

// pokemon variable can access anywhere in the program
function updatePokemon(newname) {
  pokemon = newname
}

console.log("\n")

// ------------- let -------------
// block-scope
// hoisting but it can't be used if it hasn't been declared

// example:
console.log(`------ let ------`)
let ninja;
console.log(ninja); // undefined

ninjaSay('there is so much thing as randomness'); // there is so much thing as randomness

function ninjaSay(message) {
  ninja = 'ninja: ' + message;
  console.log(ninja);
}
console.log("\n")

// let ninja; // redeclare => Uncaught SyntaxError (block-scope)


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

// reference: https://viblo.asia/p/su-khac-nhau-giua-regular-functions-va-arrow-functions-07LKXBbDlV4

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

// reference: https://viblo.asia/p/cach-su-dung-destructuring-trong-javascript-oOVlYnrQ58W

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
// i don't think understand it !!!


/* ______________________________________________ Functions of array in JS ______________________________________________*/

// references: https://www.w3schools.com/jsref/jsref_concat_array.asp

/*** concat ***/
// this method concatenates (joins) 1 or more arrays and return 1 array once, does not change the existing arrays
console.log(`------ [concat] Functions of array in JS ------`)
Concat()
console.log("\n")

function Concat() {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8, 9];
  const all = a.concat(b, c);
  console.log(all) // 1 -> 9;
}


/*** copyWithin ***/
// this method copies array elements to another position in the array, overwrites the existing values, does not add items to the array
console.log(`------ [copyWithin] Functions of array in JS ------`)
CopyWithin()
console.log("\n")

function CopyWithin() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(numbers.copyWithin(5, 0))
}


/*** entries ***/
// method returns an Array Iterator object with key/value pairs, does not change the original array
console.log(`------ [entries] Functions of array in JS ------`)
Entries()
console.log("\n")

function Entries() {
  const animals = ["duck", "cat", "fish", "dog", "chicken"];
  const f = animals.entries()
  for (let i of f) {
    console.log(i)
  }
}


/*** every ***/
console.log(`------ [every] Functions of array in JS ------`)
// method executes a function for each array element
// return true if the function returns true for all element
// return false if the function returns false for all element
// does not execute the function empty element
// does not change the original array
Every();
console.log("\n")

function Every() {
  const ages = [32, 33, 16, 40];

  console.log(ages.every(checkAge)) // false

  function checkAge(age) {
    return age > 18
  };
}


/*** fill ***/
console.log(`------ [fil] Functions of array in JS ------`)
// method fills specified elements in an array with a value, overwrites the original array
// Start and end position can be specified. If not, all elements will be filled
Fill();
console.log("\n")

function Fill() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.fill("Kiwi", 2, 4);
  console.log(fruits)
}


/*** filter ***/
console.log(`------ [filter] Functions of array in JS ------`)
// method creates a new array filled with elements that pass a test provided by a function
// does not execute the function for empty elements
// does not change the original array
Filter();
console.log("\n")

function Filter() {
  const ages = [32, 33, 16, 40];
  const result = ages.filter(checkAdult);
  console.log(result)

  function checkAdult(age) {
    return age >= 18;
  }
}


/*** find ***/
console.log(`------ [find] Functions of array in JS ------`)
// method returns the value of the first element that passes a test, executes a function for each array element
// executes a function for each array element, does not execute the function for empty elements,
// does not change the original array
Find()
console.log("\n")

function Find() {
  const ages = [3, 10, 18, 20];

  function checkAge(age) {
    return age > 18;
  }

  console.log(ages.find(checkAge))
}


/*** findIndex ***/
console.log(`------ [findIndex] Functions of array in JS ------`)
// method executes a function for each array element, returns the index (position) of the first element that passes a test
// returns -1 if no match is found, does not execute the function for empty array elements
// does not change the original array
FindIndex()
console.log("\n")

function FindIndex() {
  const ages = [3, 10, 18, 20];

  function checkAge(age) {
    return age > 18;
  }

  console.log(ages.findIndex(checkAge))
}


/*** forEach ***/
console.log(`------ [forEach] Functions of array in JS ------`)
// method calls a function for each element in an array, is not executed for empty elements
ForEach()
console.log("\n")

function ForEach() {
  const ages = [3, 10, 18, 20];

  ages.forEach((value, index) => console.log(`index: ${index}, value: ${value}`))
}


/*** from ***/
console.log(`------ [from] Functions of array in JS ------`)
// method returns an array from any object with a length property, returns an array from any iterable object
From()
console.log("\n")

function From() {
  console.log(Array.from("ABCDEFG"))
}


/*** from ***/
console.log(`------ [from] Functions of array in JS ------`)
// method returns an array from any object with a length property, returns an array from any iterable object
From()
console.log("\n")

function From() {
  console.log(Array.from("ABCDEFG"))
}


/*** includes ***/
console.log(`------ [includes] Functions of array in JS ------`)
// method returns true if an array contains a specified value, returns false if the value is not found, method is case sensitive
Includes()
console.log("\n")

function Includes() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.includes("Mango"))

  const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
  fruits1.includes("Banana", 3); // Banana not in position 3
}


/*** indexOf ***/
console.log(`------ [indexOf] Functions of array in JS ------`)
// method return the first position of a specified value, return -1 if the value is not found,
// start at a specified index and search from the left to right,
// By default the research starts at the first element and ends at the last
// negative start values count from the last element (but still from the left to right)
IndexOf()
console.log("\n")

function IndexOf() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.indexOf("Apple"))
}


/*** isArray ***/
console.log(`------ [isArray] Functions of array in JS ------`)
// method returns true if an object is an array, otherwise returns false
IsArray()
console.log("\n")

function IsArray() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(Array.isArray(fruits))

  let text = "W3Schools";
  console.log(Array.isArray(text));
}


/*** join ***/
console.log(`------ [join] Functions of array in JS ------`)
// method returns an array as a string, does not change the original array
// any separator can be specified, the default is comma (,)
Join()
console.log("\n")

function Join() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.join())
}


/*** keys ***/
console.log(`------ [keys] Functions of array in JS ------`)
// method returns an Array Iterator object with the keys of an array, does not change the original array
Keys()
console.log("\n")

function Keys() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(Object.keys(fruits))
}


/*** lastIndexOf ***/
console.log(`------ [lastIndexOf] Functions of array in JS ------`)
// method return the last index (position) of a specified element
// return -1 if value is not found, start at a specified index and searches from left to right
// by default search starts at the last element and ends at the first
// neagtive start values counts from the last element (but still search from right to left)
LastIndexOf()
console.log("\n")

function LastIndexOf() {
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  console.log(fruits.lastIndexOf("Apple"))

  const fruits1 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
  console.log(fruits1.lastIndexOf("Apple"))
}


/*** map ***/
console.log(`------ [map] Functions of array in JS ------`)
// creates a new array from calling a function for every array element, creates a new array from calling a function for every array element,
// does not execute the function for empty elements, does not change the original array.
Map()
console.log("\n")

function Map() {
  const numbers = [4, 9, 16, 25];
  console.log(`[4, 9, 16, 25] = map(sqrt) =>`, numbers.map(Math.sqrt))
}


/*** pop ***/
console.log(`------ [pop] Functions of array in JS ------`)
// method removes (pops) the last element of an array, changes the original array, returns the removed element
Pop()
console.log("\n")

function Pop() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(`["Banana", "Orange", "Apple", "Mango"] = pop() => `, fruits.pop())
  console.log(fruits)
}


/*** prototype ***/
console.log(`------ [prototype] Functions of array in JS ------`)
// allows you to add new properties and methods to arrays, is a property available with all JavaScript objects
Prototype()
console.log("\n")

function Prototype() {
  Array.prototype.myUcase = function () {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.myUcase();
  console.log(`["Banana", "Orange", "Apple", "Mango"] = myUcase() => `, fruits)
}


/*** push ***/
console.log(`------ [push] Functions of array in JS ------`)
// method adds new items to the end of an array, method adds new items to the end of an array, returns the new length
Push()
console.log("\n")

function Push() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi", "Lemon");
  console.log(`["Banana", "Orange", "Apple", "Mango"] = push("Kiwi", "Lemon") => ${fruits}, length => ${fruits.length}`)
}


/*** reduce ***/
console.log(`------ [reduce] Functions of array in JS ------`)
// method executes a reducer function for array element, returns a single value: the function's accumulated result
// does not execute the function for empty array elements, does not change the original array
Reduce()
console.log("\n")

function Reduce() {
  const numbers = [15.5, 2.3, 1.1, 4.7];

  function getSum(total, num) {
    return total + Math.round(num);
  }

  console.log(`[15.5, 2.3, 1.1, 4.7] = reduce(getSum) => ${numbers.reduce(getSum, 0)}`)
}


/*** reduceRight ***/
console.log(`------ [reduceRight] Functions of array in JS ------`)
// method executes a reducer function for each array element, works from right to left
// return a single value: the function's accumulated result
// does not execute the function for empty array elements
ReduceRight()
console.log("\n")

function ReduceRight() {
  const numbers = [2, 45, 30, 100];

  console.log("[2, 45, 30, 100] = reduceRight(getSum) => ", numbers.reduceRight(getSum))

  function getSum(total, num) {
    return total - num;
  }
}


/*** reverse ***/
console.log(`------ [reverse] Functions of array in JS ------`)
// method reverses the order of the elements in an array, overwrites the original array
Reverse()
console.log("\n")

function Reverse() {
  const numbers = [2, 45, 30, 100];
  numbers.reverse()
  console.log(`[2, 45, 30, 100] = reverse() => ${numbers}`)
}


/*** shift ***/
console.log(`------ [shift] Functions of array in JS ------`)
// method removes the first item of an array, changes the original array, returns the shifted element
Shift()
console.log("\n")

function Shift() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const shifted = fruits.shift()
  console.log(`["Banana", "Orange", "Apple", "Mango"] = shift() => ${fruits}`)
  console.log(`shifted = ${shifted}`)
}