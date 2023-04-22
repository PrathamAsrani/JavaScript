var primes = [2, 3, 5, 7];
console.log(primes);
console.log(primes[primes.length - 1]);
console.log(primes.length);
console.log(primes[0] + primes[1]);
console.log(primes[3] + primes[1]);

function fact(x) {
  if (x > 1) return x * fact(x - 1);
  else return 1;
}

result = fact(5);
console.log(result);

var x = 21,
  y = 3;
console.log(x + y);

console.log(x === 2 && y === 3);
console.log(x === 2 || y === 3);

// Js most imp data type is 'object'. A object is a collection of name/value pairs, or a string to value map.
var book = {
  // book is a object of JS
  1: "javascript",
  edition: 7,
};

console.log(book);
console.log(book.edition);
console.log(book[1]);

book.author = "Pratham Asrani";
console.log(book.author);

x = true;
y = false;
console.log(x);

z = null;
w = undefined;

// Two other very important types that JavaScript programs can manipulate are objects and arrays

var object = {
  // Objects are enclosed in curly
  1: "value", // The property "1" has value
  char: "c", // The property "char" has value
};

// Access the properties of an object with . or []:

console.log(object[1]);
console.log(object.char);
console.log("The object: " + object["char"]);

// Create new properties by
object.author = "Pratham"; // adding new property
console.log(object.author);

/*Exercise 1: take input from hr about the employee id and salary */

var list_1 = ["Pratham", "20", 1000000, "CEO"];
var list_2 = ["Yash", "19", 10000, "Assistant manager"];
var list_3 = ["Niharika", "19", 10000, "Assistant manager"];

var employee_data = {
  employee_1: list_1,
  employee_2: list_2,
  employee_3: list_3,
};

console.log(employee_data);
console.log(employee_data["employee_1"]);
console.log(employee_data.employee_1[0]);
console.log(employee_data.employee_1[1]);
console.log(employee_data.employee_1[2]);
console.log(employee_data.employee_1[3]);

function fact(x) {
  if (x > 1) {
    return x * fact(x - 1);
  } else {
    return 1;
  }
}

var ans = fact(5);
console.log(ans);

const increment = (x) => x + 1;
const square = (sqr) => sqr * sqr;

console.log(square(5));
console.log(increment(5));

// When functions are assigned to the properties of an object, we call
// them "methods." All JavaScript objects (including arrays) have methods:

var array = []; // empty array created
// methods:
array.push(1, 2, 3);
console.log(array);
console.log(array.reverse());
array = array.reverse();
console.log(array);

// page 50
function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}

console.log(abs(-10) === abs(10));
console.log(abs(+10));

function sum(array) {
  var sum = 0;
  for (var x of array) {
    sum += x;
  }
  return sum;
}
console.log(sum(primes));

function factorial(n) {
  var product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}

console.log(factorial(5));

function factorial2(x) {
  var i,
    product = 1;
  for (i = 2; i <= x; i++) {
    product *= i;
  }
  return product;
}

console.log(factorial2(4));

class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

var b = new point(1, 1);

console.log(b.distance());

class employee {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  salary() {
    console.log(this.x, this.y);
    return "The salary of Pratham Asrani: " + 1000000;
  }
}

var object_1 = new employee("Pratham", "Asrani");
console.log(object_1.salary());

console.log(10 + "20");
console.log(10 - "20"); // bug
console.log("Pratham" - "Asrani"); //NaN : not a number
console.log(true + false);
console.log(false + false);
console.log(true + true);

// null vs undefined

var el = null;
console.log(el);
console.log(typeof el); // bug

var i;
console.log(i);
console.log(typeof i);

// what is NaN?
var myname = "Pratham";
var number = 9145495032;
console.log(myname);
console.log(number);
console.log(isNaN(number));

console.log(NaN === NaN);
var x = 5,
  y = 5;
console.log(`is x == y: ${x === y}`);

var a = 1;
if (a) {
  console.log("true");
} else if (!a) {
  console.log("false");
} else {
  console.log("fuck off");
}

console.log(4 / 2);

console.log(5 + "pratham");

var num1 = 5;
var num2 = "5";
console.log(num1 == num2); // true
console.log(num1 === num2); // false

// var tom = "rain";
var tom = "sunny";
if (tom === "rain") console.log("Raincoat");
else console.log("sunny");

var year = 2001;

if (year % 4 === 0)
  if (year % 100 !== 0)
    if (year % 400 === 0) console.log("leap");
    else console.log("not leap");
  else console.log("leap");
else console.log("not leap");

// falsy value in JS are 5
// 1. NaN,
// 2. "" // i.e. a empty string is also a falsy value,
// 3. undefined
// 4. null
// 5. 0

// ternary operator is the only opeator that takes 3 operands
var age = 20;
var result = age >= 18 ? true : false;
console.log(result);

var value = 1;

if (!isNaN(value)) console.log("Yes"); // check for number

var area = "rec";
var pi = 22 / 7,
  l = 5,
  b = 6,
  r = 3;

switch (area) {
  case "circle":
    console.log("The area of circle is: " + pi * r ** 2);
    break;
  case "rec":
    console.log("The area of rec is: " + l * b);
    break;
  case "sqr":
    console.log("The area of sqr is: " + l ** 2);
    break;
  case "tri":
    console.log("The area of tri is: " + (l * b) / 2);
    break;
  default:
    console.log("invalid input\n");
    break;
}

var i = 0;

// while(i <= 10) {console.log(i); i++;}
// debugger;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (var i = 0; i < 10; i++) {
//   debugger;
//   console.log(i);
// }

// function table(num){
//   var i = 1;
//   while(i <= 10){
//     console.log(`\tThe ${num} x ${i} = ${num*i}`);
//     i++;
//   }
// }

// table(5);

// function argument: these are the values passed in the object of the function
// function parameter: these are in function definition values: e.g. parameterized function

console.log(sum(20, 21));

function sum(a, b) {
  // function parameter
  if (!isNaN(a)) a = +a;
  if (!isNaN(b)) b = +b;
  if (!isNaN(a) && !isNaN(b)) console.log(a + b);
  else return "not an numeric value";
}

sum("2", "3"); // function argument
var y = "5"; // y is a string
var x = +y;
// console.log(y);
// console.log(x);
// console.log(typeof(x));
// console.log(typeof(y));

var x = 123;

var typecast_str = String(x);

console.log(typecast_str);
console.log(typeof typecast_str);
console.log(x);
console.log(typeof x);

// anonymous function:

const subs = function (a, b) {
  if (!isNaN(a)) a = +a;
  if (!isNaN(b)) b = +b;
  if (!isNaN(a) && !isNaN(b)) return a - b;
  else {
    console.log("Invalid input");
    return NaN;
  }
};

console.log(subs("Hello", "world"));

// ECMA Script:
var hii = "hii";
console.log(hii);

hii = "bye";
console.log(hii);

const variable = function () {
  if (1) {
    console.log("innerhtml");
  }
  var innerhtml = 0;
};

console.log(variable());

console.log(summation(20, 21));

function summation(a, b) {
  // function parameter
  if (!isNaN(a)) a = +a;
  if (!isNaN(b)) b = +b;
  if (!isNaN(a) && !isNaN(b)) console.log(a + b);
  else return "not an numeric value";
}

const sum_1 = (a, b = 10) => {
  // fat arrow parameterized function
  if (!isNaN(a)) a = +a;
  if (!isNaN(b)) b = +b;
  if (!isNaN(a) && !isNaN(b)) return `The ans is ${a + b}`;
  else return null;
};

console.log(sum_1(20));

// arrays in js:
var name_data = ["Pratham", "Ashok", "Asrani"];
var employee_details = ["name", 20, 2000000, "SDE"];
console.log(name_data[0]);

// In JS we have 'Array' class as inbuild, 'new' use for dynamic memory allocation
var arr_1 = new Array();

var len = name_data.length;
console.log(len);

for (var i = 0; i < len; i++) console.log(name_data[i]);

for (var elements in employee_details) {
  console.log(elements + " " + employee_details[elements]);
}

for (var i of employee_details) console.log(i);

/*
membership operator in JS loop: 
1. 'in': e.g.(for (var elements in employee_details)), used to return the index of element.
2. 'of': e.g.(for (var i of employee_details)), used to return the the original element of the array.
*/

var a;
a = 0;
a++;
// alert(a);

// Searching and filter in an array:
// 1. first method: .indexOf()
var name_data = [
  "Pratham",
  "Ashok",
  "Asrani",
  "Loves",
  "Yashika",
  "Manoj",
  "Ramchandani",
  "and",
  "Yashika",
  "Manoj",
  "Ramchandani",
  "Loves",
  "Pratham",
  "Ashok",
  "Asrani",
];

// print array elements in a single line
console.log(name_data.join(" ")); // o/p: Pratham Ashok Asrani Loves Yashika Manoj Ramchandani and Yashika Manoj Ramchandani Loves Pratham Ashok Asrani
console.log(JSON.stringify(name_data)); // o/p: ["Pratham","Ashok","Asrani","Loves","Yashika","Manoj","Ramchandani","and","Yashika","Manoj","Ramchandani","Loves","Pratham","Ashok","Asrani"]

name_data.forEach(function (i) {
  console.log(i);
});

name_data.forEach((element, index, arr) => {
  console.log(`The element ${element}\t\t index: ${index}\t ${arr}`);
});

// fat arrow function can't support the 'this' keyword
var index = name_data.indexOf("Pratham"); // first index
var index1 = name_data.indexOf("Pratham", 1); // second index
var index2 = name_data.indexOf("Ashok", -2); // last index
console.log(`The first index ,${index}`);
console.log(`The next index ,${index1}`);
console.log(`The last index ,${index2}`);

var last_index = name_data.lastIndexOf("Pratham");
console.log(`The last index of Pratham via .lastIndexOf(): ${last_index}`);

var str = 'Hello "world" I am Pratham.'; // \": used to add the double quotes in str
console.log(str); // o/p: Hello "world" I am Pratham.

// return false
var x = new String("Pratham Asrani");
var y = new String("Pratham Asrani");
console.log(x === y);

// return true
var x = "Pratham Asrani";
var y = "Pratham Asrani";
console.log(x === y);

const prices = [100, 200, 300, 400, 500, 600];

const val = (price) => {
  return price > 200;
};

var find_index = prices.find(val);
console.log(find_index);

// imp: filter
prices.forEach((element, index, array) => {
  console.log(index, element, array);
});

const ages = [32, 36, 16, 40, 18, 17];

const checkAdult = (age) => {
  return age >= 18;
};

var valid_age = ages.filter(checkAdult);

console.log(valid_age);

// sort and compare and array:
var arr1 = [1, 5, 3, 2, 4, 6, 7, 8, 5, 6, 7, 8, 9, 10];
var arr2 = [44, 23, 43, 3, 3, 3, 2, 2, 2, 222, 21, 1, 2, 33];

var list_month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var reverseListMonth = [
  "December",
  "November",
  "October",
  "September",
  "August",
  "July",
  "June",
  "May",
  "April",
  "March",
  "February",
  "January",
];
console.log(reverseListMonth.sort());

ages.push(20, 190);
console.log(ages.sort());
console.log(ages.reverse());

// CRUD: Create Read Update and Delete

// Create array
arrayAnimal = []; // empty;
arrayAnimal[0] = "dog";
arrayAnimal[1] = "cat";
arrayAnimal[2] = "cow";

// read
console.log(arrayAnimal);

// using 'new' keyword:
array_ani = new Array("dog", "cat", "cow");

// read
console.log(array_ani);

// add:
const updated_lenght = arrayAnimal.push("chicken");
console.log(
  `The push function returns the lenght after adding an element at th end, the lenght is ${updated_lenght}`
);
const updated_lenght_1 = arrayAnimal.push("crow", "tiger", "peacock");
console.log(
  `The push function returns the lenght after adding an element at th end, the lenght after adding multiplt elements is ${updated_lenght_1}`
);

// adding element at first: .unshift("element");
const updated_lenght_2 = arrayAnimal.unshift("lion");
console.log(
  `The unshift function returns the lenght after adding an element at th end, the lenght is ${updated_lenght_2}`
);

// Delete at first: .shift();
const arr_num = new Array(1, 2, 3, 4);
console.log(arr_num.shift());

// Delete at last: .pop();
console.log(arr_num.pop());

console.log(arr_num);

var theRet = arr_num.splice(0, 0, 1);
console.log(theRet);
theRet = arr_num.splice(3, 0, 4);
console.log(theRet);
console.log(arr_num);

// Update
var lisMon = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];

var index_adding_dec = lisMon.indexOf("November");
var index_adding_dec1 = lisMon.lastIndexOf("November");
console.log(index_adding_dec);
console.log(index_adding_dec1);

console.log(`The lisMon before adding december:\n ${lisMon}`);
lisMon.splice(11, 0, "December");
console.log(`The lisMon after adding december:\n ${lisMon}`);
lisMon.splice(12, 0, "December", "hii", "Pratham", "Age: ", 20);
console.log(`The lisMon after adding december:\n ${lisMon}`);

var deleted_index_of_month = lisMon.lastIndexOf("December");
console.log(deleted_index_of_month);
const deleted_item = lisMon.splice(deleted_index_of_month, 1);
console.log(deleted_item);
console.log(`The lisMon after deleting december:\n ${lisMon}`);

var array_num = [25, 36, 49, 64, 81];
var array_mul = [2, 3, 4, 6, 8, 10];

var ind = 0;
while (ind < array_num.length) {
  console.log(Math.sqrt(array_num[ind]));
  ind++;
}
ind = 0;
while (ind < array_mul.length) {
  if ((array_mul[ind] * 2) >= 10) {
    console.log(array_mul[ind]);
  } else {
    console.log("-1");
  }
  ind++;
}

console.log(array_num);


// Map, Reduce, and Filter: 

var new_array = array_mul.map((element, index, array)=>{
  return (element>9);
});

console.log(new_array);

array_mul.forEach((element, index, array)=>{
  if(element>9) console.log(element);
});

var yaya = arr_num.map((element, index, array)=>{
  return `Index no. = ${index} and the value corrresponds to it = ${element} belogns to = ${array}`
});

console.log(yaya);

name_data.forEach(function (i) {
  console.log(i);
});

// we can attach different methods with 'map' like reduce, sort, filter, etc

var re = name_data.map((element, index, array)=>{
  return `${index+1}: ${element} ---> array: [${array}] `;
}).filter(checkAdult);

console.log( "The list: ", re);

const my_arr = [1,2,3,4,5];

console.log(my_arr.map((element, index, array) => {
  console.log("hii\n");
  return `${index+1}: ${element} ---> array: [${array}] `;
}).reduce((total, value) => total+value));

var res_sqrt = array_num.map((element, index, array) => {
  return Math.sqrt(element);
});

//case1

// const ValidNum = (num) => {
//   if(num > 10) return num;
// }

// var res_mul = array_mul.map((element, index, array) => {
//   return element*2;
// }).filter(ValidNum);

//case2
// var res_mul = array_mul.map((element, index, array) => {
//   return element*2;
// }).filter((num) => {
//   return num>10;
// });

// case 3
var res_mul = array_mul.map((currElement) => currElement*2).filter((num)=> num>10);

console.log(res_sqrt);
console.log(res_mul);

// Reduce Method: 
// to convert 2D or 3D array into 1D array.
// or to calculate a single value like(sum od all, percentage, avg, product, etc).

// reduce func take 4 input: 
// 1. Accumulator
// 2. Current value
// 3. Current Index
// 4. Source Array

var arr_reduce = [5,6,2];
// sum:
var summ_red = arr_reduce.reduce((accumulator, curElement, index, array) => {
  // return accumulator += curElement;
  debugger;
  return accumulator *= curElement;
},/*The initial value: 7*/7);

console.log(`The sum using reduce: ${summ_red}`);


var s = arr_reduce.reduce((accumulator, element, index, array)=>{
  return accumulator *= element;
}, 9);

console.log(s);

var array_2d = [
  ["Pratham", "Ashok", "asrani"],
  ["Yashika", "Manoj", "Ramchandani"],
  ["Both", "Loves", "Each", "Other", "forever"]
]

var flatArr = array_2d.reduce((accumulator, element, index, array)=>{
  return accumulator.concat(element);
})

console.log(flatArr)



// concat: 
var f = ["Pratham", "Ashok", "Asrani"];
var l = ["Yashika", "Manoj", "Ramchandani"];
var love = f.concat(l)
console.log(love)

// Escape charater
// find/search str in str
// extracting str parts
// replacing str content
// extracting str char
// other useful methods


// Escape charater:
// The backslash (\) escape charcter turns special charaters into string characters
/*
sr no   code    result      description
1.      \'      '           single quote
2.      \"      "           double quote
3.      \\      \           backslash
*/

// string constructor: 
var my_str = new String("Pratham Ashok Asrani");
var me = "Pratham Ashok Asrani";
console.log( typeof(my_str), typeof(me), "\nThe value is same therefore in == giving true: \n",me == my_str, "\nThe value is same but the type is different therefore in === giving false: \n" ,me === my_str)
// using escape charater: 
var m = "Pratham \"Loves\" Yashika"; // the backslash allowing quotes to be used inside the quotes
var n = "Yashika \'Loves\' Pratham"; // the backslash allowing quotes to be used inside the quotes

console.log(m);
console.log(n);


var index_asrani= m.search("Loves");
console.log(index_asrani)

// common & differnce between search and indexOf or lasrIndexOf
// common : in search and indexOf or lasrIndexOf return the index of given value, if not present then retuens -1
// difference : in search and indexOf or lasrIndexOf is that we can provide the specified postion to search in lastIndexOf or indexOf("value", 7), 7 : represents the index where searching will start. Whereas, in search we can not provide the desired position to start search.


// Extraction String parts : 
// Three methods used : 1. slice(start, end), 2. substring(start, end), 3. substr(start, lenght)

var my_string = "Yo-Yo, Yashika";
console.log(my_string.slice(0, 2));
console.log(my_string.slice(2, 3));
console.log(my_string.slice(3, 5));
console.log(my_string.slice(2, -2)); // from 2nd index to the last second index

// create an application where string input is only allowed to be lenght of 280 characters.

var myTweet= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero molestiae dignissimos nihil enim quibusdam harum! Quae aut tenetur sequi sunt molestiae, impedit adipisci animi unde atque eaque consectetur eos temporibus praesentium est vitae odio vel consequuntur ex autem ut! Neque, expedita fugiat? Facilis eaque, voluptatibus amet provident explicabo consequatur sed nostrum sint inventore repellendus reprehenderit quaerat autem, ratione esse dolores suscipit maiores vel! Veritatis beatae blanditiis, rem ut maiores minus fugiat atque, corporis sapiente voluptatibus neque. Harum molestiae nobis repellat corporis alias magni impedit explicabo perferendis libero delectus tempore voluptatum tenetur eligendi laboriosam, aliquam odio voluptas. Obcaecati molestias necessitatibus asperiores officiis voluptas, enim quis et! Nemo voluptatum ipsum mollitia autem omnis quasi id, sint facere sunt velit, ipsam optio quisquam labore natus. Esse, quos excepturi fugiat reprehenderit sequi porro cupiditate quaerat minus debitis necessitatibus voluptas repellendus inventore, natus, numquam ut harum unde enim tenetur architecto explicabo ex labore? Ipsa voluptas doloribus molestias, unde labore quod facere accusantium repellendus voluptatibus? Veritatis nesciunt nisi, quaerat odit vel officia molestiae sint quod dolorum illum nostrum modi dolor est asperiores nemo autem dolore repellat ipsa quia alias temporibus aspernatur natus. Fugiat tenetur vel incidunt dignissimos unde modi vero placeat reiciendis numquam eaque deleniti aperiam quae beatae, recusandae, labore saepe enim nisi alias quos cupiditate provident. Suscipit omnis accusantium veritatis ullam vero, nobis ab reiciendis maxime adipisci explicabo inventore velit. Similique, maxime. Eveniet soluta atque minima incidunt sapiente cumque laudantium iste necessitatibus quis. Minima quibusdam dolore nihil odio sit a atque perspiciatis aperiam natus optio, dicta reprehenderit blanditiis, earum provident minus veritatis laborum inventore quam accusamus mollitia! Aperiam odit eaque voluptates, a eos praesentium quod deleniti beatae sed, inventore cupiditate distinctio rem tenetur consectetur neque!";

console.log("\nThe original tweet:\n" ,myTweet);
console.log("\nThe 0-280th index tweet:\n" ,myTweet.slice(0, 280));

console.log("The substring cannot accept the negative indexs");

console.log(my_string.substring(0, 16));
console.log(my_string.substring(2, -16)); // cannot accept negative value: return he first name in the string 

console.log(my_string.substr(-7));

var replace_testing_str = "Hello kirti kirti!";
var updated_replace_testing_str = replace_testing_str.replaceAll("kirti", "Yashika");
console.log(replace_testing_str);
console.log(updated_replace_testing_str);
var r = "Pratham loves kirti Yashika";
var t = r.replace("kirti", "Yashika");
console.log(r);
console.log(t);


// Extracting characters from str: 
var charindex = my_str.charAt(0);
var cindex = my_str.charCodeAt(2);
console.log(charindex);
console.log(cindex);

var lastChar = my_str.length-1;
console.log(my_str.charCodeAt(lastChar));

var space_str = "     Hello     World         !           ";
console.log(space_str);
console.log(".trim() removes the extra spaces:\n",space_str.trim());

// convert string to an array : 
var arrStr = my_str.split(" ");
console.log(arrStr);

var Str = "Pratham,   Ashok,    Asrani";
var arrS = Str.split(",");
console.log(arrS);

arrS.forEach((element, index, arrar)=>{
  console.log(element.trim());
});

var c = arrS.map((element, index, array)=>{
  return element.trim();
});

console.log(c);

var j = arrS.reduce((accumulator, element, index, array)=>{
  return accumulator = accumulator.concat(" "+element.trim());
});

console.log(j);

// Date and Time in JavaScript: 
/*
Date Methods (get and set)
Time Methods (get and set)

Date and Time Calculation via the 1 jan 1970
*/

// Create Date object: 
// There are 4 ways to create date object: 


// new Date();
// // it can take upto 7 arguments: 
// new Date(year, month, day, hour, minute, second, millisecond);
// new Date(milliseconds);
// // we cannot avoid month in the section: 
// new Date (date string);



// 'new' keyword represent the object constructor, 'Date' is a class.
let currDate = new Date();
console.log(currDate);
console.log(currDate.toLocaleString());
console.log((new Date()).toString());

console.log(Date.now());

i = '2';

if(i == 1)  console.log("if");
else if(i === 2)  console.log("else if");
else console.log("else");

// new Date(year, month, day, hour, minute, second, millisecond);
console.log(new Date(2002, 10, 29, 10, 40, 40, 55));
console.log((new Date(2002, 10, 29, 10, 40, 40, 55)).toLocaleString());
console.log((new Date(2002, 10, 29, 10, 40, 40, 55)).toString());

var date1 = new Date(2010,01,10);
var dateNow = new Date();
console.log("The date1: ",date1.toString());

if(dateNow > date1) console.log("dateNow greater");
else if(dateNow == date1) console.log("equal dates");
else console.log("date1 is greater");
console.log(dateNow.getTime())

var d = new Date("October 10, 2021 11:13:00");
console.log(d) // date is ok but time is not proper
console.log(d.toString())// all ok
console.log(d.toLocaleString())// all ok

console.log(currDate.getDate())
console.log(currDate.getDay()) // saturday: 6
console.log(currDate.getFullYear())
console.log(currDate.getHours())




















