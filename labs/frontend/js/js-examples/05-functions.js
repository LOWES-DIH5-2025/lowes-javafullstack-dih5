// Type #1: Named Function

// Function Defintion
function add(x,y) { // paramerters
    console.log("Adding nos");
    console.log(x + y);
    return x + y;
}

function add(x) {
    console.log("calling add(x)");
    console.log(x);
}


// Function Call
// add();
// add(10,20); // arguments
// add('Hello','JS');
// add(10, 'Hello');
// add(100);
// add('Hello');

// let result = add(10,20);
// console.log(result);

// Type #2: Annoymous Function
// First Class Function
// let addition = function(x,y) { // paramerters
//     console.log("Adding nos");
//     console.log(x + y);
//     return x + y;
// };

// let concat = addition;

// console.log(typeof addition);

// console.log(addition instanceof Function);

// let output = addition(100,200);
// concat('Hello', 'JS');


// Type #3: IIFE (Immediately Invoked Function Expression)

// (function(x,y) {
//     let z = x + y;
//     console.log(z);
// })(123, 456);


// Type #4: Passing fn as arguments

// let add = function(a,b) {
//     return a + b;
// }

// function compute(operation, a, b) {
//     return operation(a,b);
// }

// let output = compute(add, 100, 200);
// console.log(output);

// console.log(compute(function(a,b){return a * b}, 100, 200));

// console.log(compute( (a,b) => a * b, 100, 200)); // Arrow Function

// let abc = function() {
//     console.log('testing');
// }

// debugger;
// console.log(abc());