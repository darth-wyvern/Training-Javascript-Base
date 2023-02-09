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


/*** slice ***/
console.log(`------ [slice] Functions of array in JS ------`)
// method returns selected elements in an array, as a new array, selects from a given start, up to a (not inclusive) given end
// does not change the original array
Slice()
console.log("\n")

function Slice() {
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  console.log(`["Banana", "Orange", "Lemon", "Apple", "Mango"] = slice(1, 3) => ${fruits.slice(1, 3)}`)
}


/*** some ***/
console.log(`------ [some] Functions of array in JS ------`)
// method checks if any array elements pass a test (provided as a callback function), 
// executes the callback function once for each array element
// returns true (and stops) if the function returns true for one of the array elements,
// returns false if the function returns false for all of the array elements
// does not execute the function for empty array elements
// does not change the original array
Some()
console.log("\n")

function Some() {
  const ages = [3, 10, 18, 20];

  console.log(`[3, 10, 18, 20] = some(element > 18) => ${ages.some(checkAdult)} (because 20 passed)`)
  function checkAdult(age) {
    return age > 18;
  }
}


/*** sort ***/
console.log(`------ [some] Functions of array in JS ------`)
// sort elements of an array, overwrites the original array, the elements as strings in alphabetical and ascending order 
Sort()
console.log("\n")

function Sort() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  console.log(`["Banana", "Orange", "Apple", "Mango"] = sort() => ${fruits}`)
}


/*** splice ***/
console.log(`------ [some] Functions of array in JS ------`)
// method adds and/or removes array elements, overwrites the original array
Splice1()
Splice2()
console.log("\n")

function Splice1() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log(`At position 2, add 2 elements:`);
  console.log(`    ["Banana", "Orange", "Apple", "Mango"] = splice(2, 0, "Lemon", "Kiwi") => ${fruits}`)
}

function Splice2() {
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
  fruits.splice(2, 2);
  console.log(`At position 2, remove 2 items: `);
  console.log(`    ["Banana", "Orange", "Apple", "Mango", "Kiwi"] = splice(2, 2) => ${fruits}`)
}


/*** toString ***/
console.log(`------ [toString] Functions of array in JS ------`)
// method returns a string with array values separated by commas, does not change the original array
ToString()
console.log("\n")

function ToString() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let text = fruits.toString();
  console.log(`Convert an array to a string:`)
  console.log(`    ["Banana", "Orange", "Apple", "Mango"] = toString() => ${text}`)
}


/*** unshift ***/
console.log(`------ [unshift] Functions of array in JS ------`)
// method adds new elements to the beginning of an array, overwrites the original array
Unshift()
console.log(`\n`)

function Unshift() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Lemon", "Pineapple");
  console.log(`Add new elements to an array: `)
  console.log(`    ["Banana", "Orange", "Apple", "Mango"] = unshift("Lemon", "Pineapple") => ${fruits}`)
}


/*** valueOf ***/
// method returns the array itself, does not change the original array
ValueOf()
console.log('\n')

function ValueOf() {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const myArray = fruits.valueOf();
  console.log(`["Banana", "Orange", "Apple", "Mango"] = valueOf() => ${myArray} - I don't know what function of it`)
}