// Map (returns array) , Filter (returns array) and Reduce (returns value)
// Note : these function doesnot distrub our original array

// Array Map method
//  Map takes 3 input // value // index // array

let arr = [45, 23, 71]
let arr1 = [45, 23, 71]
console.log(arr);
console.log(arr1);

arr.map((Element) => {
    console.log(Element);
})
// map creating a new array and returning that

let a = arr1.map((value, index, array) => {
    console.log(value, index, array)
    return value + index // index added with values : 45+0, 23+1, 21+2
})
console.log(a); // new array created and printed



// Array Filter method
arr2 = [0, 3, 5, 45, 6, 7, 8, 9, 100, 78, 90]
// suppose I want to access the elements smaller than 10
let a2 = arr2.filter((value) => {
    return value < 10;
})
console.log(a2)

// Array Filter method


// Array Reduce method
let arr3 = [1, 2, 3, 4, 5, 2, 1]
let a3 = arr3.reduce((Yoya, yaya)=>{
    return Yoya + yaya; // 1+2= 3, 3+3 = 6, 6+4 = 10, 10+5 = 15, 15+2 = 17, 17+1 = 18
})
console.log(a3);