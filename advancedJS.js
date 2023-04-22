// refer Advanced JS.jpeg for topic covered in this file:
// to transfer the data via browser 'XML' was used but in trending 'JSON' is used.

// Event propogation?, event bubbling?, and event capturing?

// Event propogation: determines in which order the elements received the events.
// e.g. window<--->document<--->html<--->body<--->div<--->button<--->click.

// event bubbling?, and event capturing?: these are the two ways of 'Event propogation' in the HTML DOM API, when an event occurs in an element inside another element inside, and both element have registered a handle for that event. The event propogation mode determines in which order the elements receive the event. from bottom to top(i.e. from target to window) = event bubbling, and from top to bottom(i.e. from window to target) = event capturing.

// capturing is also called trickling.

// 1. open EventPropogation.html // event.stopPropogation(); : used to stop the event propogation

// Hoisting in JS: It is a mechanism in which the variables and functions declaration are moved to the top of their scope. Hoisting is avoided by the use of 'let' keyword instead of var after ES2015(ES6)

console.log((a = null ?? "null str"));
console.log((a = undefined ?? "null str"));
console.log((a = 10 ?? "null str"));
console.log(Math.PI);

// Lexical Scoping means, the inner function can get access to their parent function variables, but vice-versa is not possible.
// Closures in JS:
// A closure is a combination of function bundled together (enclosed) with refernce to it's surronding state (the lexical enviornment). In other words closure gives you access to the outer function scope from the inner function.
// Closures is same as Lexical Scoping.
// e.g. of Lexical Scoping or closure:
var a = "Hii Pratham";

const first = () => {
  var b = ", you are going to become the healthly, weathly, and wise";

  const second = () => {
    var c = "I am happy.";
    console.log(`${a + b}. ${c}`);
  };

  second();

  // console.log(`${a+b}. ${c}`); // can't able to use 'c';
};

first();

var d = 25;
console.log(d);
console.log(typeof d);
d = String(d);
console.log(d);
console.log(typeof d);
d = parseFloat(d);
console.log(d);
console.log(typeof d);

// asynchronous JS:
// synchronous: if u are trying to do 2 work, until u completed the first work, you will not be able to go for second work.
// asynchronous: u don't have to wait for the first work to complete, second work can be started

// e.g. :

// synchronous:

const func2 = () => {
  console.log("function2");
};

const func1 = () => {
  console.log("function1 first time");
  func2();
  console.log("function1 second time");
};

func1();

// synchronous end

// asynchronous:

const fun2 = () => {
  console.log("with setTimeour()");
  setTimeout(() => {
    console.log("Asynchronous function, Result after 3 sec.");
  }, 3000);
};

const fun1 = () => {
  console.log("function1 first time");
  fun2();
  console.log("function1 second time");
};

fun1();

// asynchronous end

// function currying: // passing multiple function arguments e.g. : sum(5)(3)(8), function currying is defined as each function returing another function.
// what is the o/p: sum(5)(3)(8)?

/*
function sum(n){
    // console.log(n);
    return function(n1){
        // console.log(n, n1);
        return function(n2){
            console.log(n, n1, n2);
            console.log("The sum",n+ n1+ n2);
        }
    }
};
*/

const sum = (n1) => (n2) => (n3) => {
  console.log(n1, n2, n3);
  console.log("The sum", n3 + n1 + n2);
};

sum(5)(3)(8);


// CallBack Hell: 

// CALLBACK FUNCTION: passing a function as an argument inside the another function. It's a time consuming, to avoid CallBack_Hell we uses the promises.

const CallBack_Hell = () => {
    setTimeout(() => {
        console.log("workdone first");
        setTimeout(() => {
            console.log("workdone second");
            setTimeout(() => {
                console.log("workdone third");
                setTimeout(() => {
                    console.log("workdone fourth");
                    setTimeout(() => {
                        console.log("workdone fifth");
                        setTimeout(() => {
                            console.log("workdone sixth");
                            setTimeout(() => {
                                console.log("workdone seventh");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

CallBack_Hell();

// with the help of API two different software can communicate with each other to share data.
// open api.html