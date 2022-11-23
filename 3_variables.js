// 3types of variable : 
/*
const - not able to change value in future 
var - value changeable even we can declare the same name var again
let - value changeable but we cannot declare the same name var again
note - to avoid the bugs try to avoid using var
*/

var a = 45;
console.log(a);
a = 35;
console.log(a);
a = 10;
console.log(a);
var a = "Pratham";
console.log(a);

let a1 = 100;
console.log(a1);
a1 = 50;
console.log(a1);
// let a1 = 30;  // throw error bcz we already used let previous to define 'a1'
// console.log(a1);
a1 = "Pratham";
console.log(a1);

const a2 = "Pratham";
console.log(a2);
// a2 = "Khushi";
// console.log(a2);

let c = null;
console.log(c);

let d = undefined;
console.log(d);

const love = "Khushi loves Pratham";
console.log(love);


