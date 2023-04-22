// Section 9: Math operations in JS:
// pie
console.log(Math.PI);

// round
var pie = 3.14;
console.log(Math.round(pie));
var round = 3.56;
console.log(Math.round(round));
var inter = 3.5;
console.log(Math.round(inter));
var inter = 3.51;
console.log(Math.round(inter));
var inter = 3.49;
console.log(Math.round(inter));

// pow(), i.e. exponent
var n1 = 2;
var n2 = 3;
console.log(Math.pow(n1, n2)); // n2 will act as the power of the n1
console.log(Math.pow(2, 5)); // 5 will act as the power of 2
// or
console.log(2 ** 3); // 3 will act as the power of 2
console.log(2 ** 5); // 5 will act as the power of 2

var sqr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

sqr.forEach((element, index, array) => {
  console.log(Math.sqrt(element));
});

// Math.abs() // return the positive value of number
var negNum = -1;
console.log(Math.abs(negNum));

// Math.ceil() // return the closest bigger number
var a = 5.4,
  b = 5.0001;
console.log(Math.ceil(a));
console.log(Math.ceil(b));

// Math.floor() // return the closest smaller number
var c = 5.6,
  d = 5.9999999;
console.log(Math.floor(c));
console.log(Math.floor(d));

// Math.min() // returns the minimum value
console.log("The smallest num:", Math.min(1, 2, 3, 4, 5, 6, 0, -10));
var num = [1, 2, 3, 4, 5, 6, 0, -10];

// Math.max() // returns the maximum value
console.log("The largest num:", Math.max(1, 2, 3, 4, 5, 6, 0, -10));

/*
// not proper output is coming
minVal = Infinity;
maxVal = -Infinity;
for (item in num){
    if(item < minVal) minVal = item;
    if(item > maxVal) maxVal = item;
}
console.log(minVal); // 0
console.log(maxVal); // 7
*/

// to find the smallest/largest of array : num
console.log(Math.min.apply(Math, num)); // -10
console.log(Math.max.apply(Math, num)); // 6

// or
console.log(Math.min.apply(null, num)); // -10
console.log(Math.max.apply(null, num)); // 6

// or
console.log(Math.min(...num));
console.log(Math.max(...num));

// Math.random()
console.log(Math.random()); // return number between 0 to 1
console.log(Math.random() * 10); // return number between 1 to 10
console.log(Math.floor(Math.random() * 100)); // return number between 1 to 100
console.log(Math.ceil(Math.random() * 100)); // return number between 1 to 100

// Math.turnc({{num}}) // returns the integer part of the number
console.log(Math.trunc(4.6));
console.log(Math.trunc(-4.6));
console.log(Math.abs(Math.trunc(-4.6)));

var number = -10.7;
if (number >= 0) {
  console.log(Math.floor(number));
  console.log(Math.trunc(number));
} else {
  console.log(Math.ceil(number));
  console.log(Math.trunc(number));
}


// array of functions: 
var numberTesting1 = 10,numberTesting2 = 2;

function sum(numberTesting1,numberTesting2){
  return numberTesting1+numberTesting2;
};

const sub = (numberTesting1,numberTesting2) => {return numberTesting1-numberTesting2;};

const mul = (numberTesting1,numberTesting2) => {return numberTesting1*numberTesting2;};

var arrFunc = [sum(numberTesting1,numberTesting2), sub(numberTesting1,numberTesting2), mul(numberTesting1,numberTesting2)];

console.log(arrFunc[0]);
console.log(arrFunc[1]);
console.log(arrFunc[2]);



/*
1. Windows vs DOM
2. DOM vs BOM
3. DOM navigation
4. searching and getting elements refernce
*/

/*
BOM:
1. navigator,
2. Screen,
3. location,
4. frames, and
5. history
*/


/*
Properties of window:
1. innerHeight
2. innerWidth
*/


// use below two lines in browser console
/*
alert(location.href);
if(confirm("continue: ")) location.href = "https://prathamasrani.github.io/CV.github.io/";
*/


// querySelector({{ {{# or .}} {{ {{name of id}} or {{ name of class}} }} }}); // # represent id, and . represent class
// e.g.
// var c1 = document.querySelector('#one');

// Events in JS: 

/*
1. four ways of writing events in JS
2. What is Event Object?
3. MouseEvent in JS
4. KeyboardEvent in JS
5. InputEvents in JS
*/

// HTML events are "things" that happens in HTML element
// Whern JS is used in HTML pages, JS can "react" on these events.

// e.g. onclick() is an event
// An html event can be something that browser does, oe something a user does.

// here are some e.g.:
// 1. An html web page has finished loading
// 2. An html input field was changed
// 3. An html button was clicked
// 4. Often, when event happens, tou may want to do something.

// JS lets you execute code when events are detected.

// html allows event handling attributes, with JavaScript code, to be added to HTML element.


// section 1: four ways of writing events in JS: 
/*
1: using inline event, e.g. alert, prompt, and confirm.
2: using function
3: Inline events in HTML tags e.g. onclick() // anchor tag (i.e. a) will be used.
4: using eventListerners e.g. addEventListener and IE's attachEvent)
*/

// check the event html file : EventsType.html

// section 2: What is Event Object?:

// OOP's: 
// object literals, and objects?
// object literals: key:value, pair data structure, able to store variable and function together in one container.
// open object.html

let nameTest = {
  setName: (string_name) => {
      n = string_name;
  },
  getName: () => {
      console.log(n);
  },
  // adding function directly, without colon
  directFunc(){
    console.log("This is a direct function");
  }
}
nameTest.setName("Pratham");
nameTest.getName();
nameTest.directFunc();

// Destructuring in Arrays of ES6
const bio = ["Pratham", "Asrani", 20];

let [fname, lname, age] = bio;
console.log(fname);

let objectName = {
  [fname]: "Hello, how r u?",
  20: "is your age?",
  [15 + 6]: "is not equal to your age"
};

console.log(objectName);
console.log(objectName[fname]);
console.log(objectName[20]);
console.log(objectName[15+6]);
console.log(objectName[21]);
console.log(objectName[22]);

let colors = ["red", "blue", "green"];
let newColors = [...colors, "white", "purple", "lightblue"]; // COLORS ARRAY ADDED
console.log(colors);
console.log(newColors);


console.log(isPresent = colors.includes("white"));

/*
ES8 Features: 2017

1. string padding
2. object.values()
3. object.enteries()
*/

// paste below two lines in browser console
const message = "Defeat".padEnd(10);
message;

let oops_obj = {
  name: "pratham",
  age: 20
};

console.log(Object.values(oops_obj));
console.log(Object.entries(oops_obj));
console.log(Object.keys(oops_obj));

let arrNum2D = [
  [1,2],
  [3,4],
  [5,6],
  [7,[8,9]]
];

console.log(arrNum2D);

let flatArr = arrNum2D.reduce((acc, ele, ind, arr) => {
  return acc.concat(ele);
});

console.log("\nThe nested array in the nested array is 'not' flattered: \n", flatArr);

// to flattern that: 
// we will use flat from ES9, 2019: 
console.log(arrNum2D.flat()); 
console.log(arrNum2D.flat(2)); 
console.log(arrNum2D.flat(Infinity)); 

let h = "       yoyo";
let w = "gig      ";
console.log(h);
console.log(h.trimStart());
console.log(w);
console.log(w.trimEnd());


let oldNum = Number.MAX_SAFE_INTEGER; // Number.MAX_SAFE_INTEGER = 9007199254740991
console.log(oldNum);
console.log(++oldNum);
console.log(`The operation is not under control after excceding MAX_SAFE_INT: ${oldNum + 12}, wrong answer is coming`);
console.log(`The operation is not under control after excceding MAX_SAFE_INT: ${oldNum + 15}, wrong answer is coming`);

let newNum1 = 9007199254740991n + 12n;
let newNum2 = 9007199254740991n + 15n;
console.log(`\nto avoid this problem add 'n' after the numbers: ${9007199254740991n + 12n}, now right answer is coming, the type is ${typeof(newNum1)}.`);
console.log(`\nto avoid this problem add 'n' after the numbers: ${9007199254740991n + 15n}, now right answer is coming, the type is ${typeof(newNum2)}.`);

let var1 = null ?? "null value";
let var3 = "##" ?? "null value";
let var4 = undefined ?? "null value";
let var2 = 1 ?? "null value";
console.log(var1);
console.log(var3);
console.log(var4);
console.log(var2);

console.log(newNum1);
console.log(newNum1++);
console.log(newNum1++);
console.log(newNum1++);
console.log(++newNum1);

// strict mode
"use strict"
xxx = 3.14;
console.log(xxx);
