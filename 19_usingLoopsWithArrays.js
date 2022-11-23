let num = [3, 54, 1, 2, 4];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

const a = [1,2,3]
console.log("Elements of a ")
a.forEach((Element) =>{
    console.log(Element);
})
//forEach loop
num.forEach((Element)=>{
    console.log(Element**2); // square will be printed
})

// when we are working with DOM in web development we grt the html collection we need to convert it in array and in that to access that we need 'array.from'

//Array.from
console.log("Array.from used to convert html collection into array or we can use like this : ")
let name = "Pratham";
let arr_name = Array.from(name);
console.log(arr_name);

// for..of
console.log("For .. of : loop");
for(let i of num){
    console.log(i); // num array elements accessed thgrough this
}

// for..in
console.log("For .. in : loop");
for(let i in num){
    console.log(num[i]);
}