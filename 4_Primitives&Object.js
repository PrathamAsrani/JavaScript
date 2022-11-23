// primitive data type: fundamental data type
// NNSSBBU - NULL NUMBER SYMBOL STRING BOOLEAN BIGINT undefined
// DATA TYPE - IN WHICH TYPE OF VARIABLE WHICH TYPE OF DATA GOING TO STORE
// OBJECT ARE THE KEY VALUE PAIR : KEY CAN BE STRING/ Number, WHEREAS VALUE CAN NUMBER STRING BOOL.
// 7 TYPES OF PRIMITIVE DATA TYPE & OBJECT IS NON PRIMITIVE 

let a = null;
let b = Number(345);//it is a number
let c = Symbol("I am Symbol");
let d = "Pratham";
let e = true; //can also be false
let f = BigInt("567") + BigInt(103);
let g = undefined;
let h = BigInt(898989989898998988);
console.log(a, b, c, d, e, f, g, h);

console.log(typeof d);

//Object in JS : 
const item = {
    "Pratham": true,
    "Khushi": false,

    "Nana": 67,
    "Rohan": 69,
    "Rohit": undefined
}

console.log(item["Pratham"]);
console.log(item["khushi"]);