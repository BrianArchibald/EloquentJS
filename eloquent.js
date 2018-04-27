/////  Ex 1  /////////

const min = function (a,b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
};

//////////   Ex 2   //////////////////

const isEven = function(a) {
	if (a < 0) {
		prompt('need pos whole number');
	} else {
		if (a % 2) {
			return true;
		}
		else {
			return false;
		}
	}
};

/////////////// Ex 3 //////////////////////

const countBs = function(word) {
	
};



let journal = [];
function addEntry(events, squirrel) {
journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);

//dont need events: events, it is implied if no value afterwards.

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

let todoList = [];
function remember(task) {
todoList.push(task);
}
function getTask() {
return todoList.shift();
}
function rememberUrgently(task) {
todoList.unshift(task);
}

//////////////////// Ex 4 /////////////

const array1 = [1,2,3,4];

const sum = array1.slice(n).reduce((a,b) => a + b);  // N is the number to be left out of array, 
// sums up array besides n

const sum = array1.reduce((a,b) => a + b); // sums whole array

const newArr = oldArr.filter(function(value, index, Arr) {
	return index % 3 == 0; 
})   // will set newArr to every third value in oldArr

var array1 = [1,2,3];
var newArr = [];
function change (array1) {
	for (let i = array1.length; i < 0; i--) {
		newArr.push(array1[i]);
	}
};


function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}
repeat(3, console.log);
//0,1,2

///// Filter

//Doesn't modify existing array, add's filtered items to a new array.

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test (element))	{
			passed.push(element);
		}
	}
	return passed;
}
 //or
 console.log(SCRIPTS.filter(s => s.direction == "ttb"));  //ttb is a element on an object
 // [{name: "Mongolian", ...}...]


 //////  Map
 
 // applys a function to all elements of array and builds a new array, new 
 // array will be same length as original array.

 fucntion map(array, transform) {
 	let mapped =[];
 	for (let element of array) {
 		mapped.push(transform(element));
 	}
 	return mapped;
 }

 let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
 console.log(map(rtlScripts, s => s.name));


 ////  Reduce
 // you can leave off start element if the array has at least 1 element

 function reduce(array, combine, start) {
 	let current = start;
 	for (let element of array) {
 		current = combine(current, element);
 	}
 	return current;
 }
console.log(reduce([1,2,3,4], (a,b) => a + b, 0));  // 10

// or better
console.log([1,2,3,4].reduce((a,b) => a + b)); // 10

/////////////////////////////

// finding the biggest script

let biggest = null;
for (let script of SCRIPTS) {
	if (biggest == null || 
		characterCount(biggest) < characterCount(script)) {
		biggest = script;
	}
}
console.log(biggest);

/// finding the average of array

function average(array) {
return array.reduce((a, b) => a + b) / array.length;
}
console.log(Math.round(average(
SCRIPTS.filter(s => s.living).map(s => s.year))));
// 1185
console.log(Math.round(average(
SCRIPTS.filter(s => !s.living).map(s => s.year))));
// 209

//or
let total = 0, count = 0;
for (let script of SCRIPTS) {
if (script.living) {
total += script.year;
count += 1;
}
}
console.log(Math.round(total / count));
// → 1185

///////////////////

You can iterate over arrays using a special kind of for loop—for (let
element of array).


console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

The trim method removes whitespace (spaces, newlines, tabs, and similar
characters) from the start and end of a string.
console.log(" okay \n ".trim());
// → okay

console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA

let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

function max(...numbers) {     /////  or  math.max function      ...numbers - takes any number of arguments
let result = -Infinity;
for (let number of numbers) {
if (number > result) result = number;
}
return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

console.log(Math.random());                     /////////////  Math random  //////
// → 0.40180766698904335

console.log(Math.floor(Math.random() * 10));
// → 2

let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji


//////////// JSON      ///////////////

JavaScript gives us the functions JSON.stringify and JSON.parse to convert
data to and from this format.

let string = JSON.stringify({squirrel: false,
events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]



///// Methods   /////


let rabbit = {};
rabbit.speak = function(line) {
console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'



////// Prototypes  ////

//you can use object.creat to creat an object with a specific Prototypes

let protoRabbit = {
speak(line) {
console.log(`The ${this.type} rabbit says '${line}'`);
}
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'



////// Map ////

let ages = new Nap();

ages.set('Boris', 39);

console.log(`Boris is ${ages.get('Boris')}`); /// Boris is 39

//set, get, and has are part of Map

/// Polymorphism ///
//can work with diff types of values as long as the use the interface (such as toString)

Rabbit.prototype.toString = function() {
return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
// → a black rabbit
