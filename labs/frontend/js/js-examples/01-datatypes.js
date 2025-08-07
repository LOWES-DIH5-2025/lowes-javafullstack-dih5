
// single line comment

/* Multi line 
    comment
*/

// Data Types

// Primitive
    // 1. string
    // 2. number
    // 3. boolean
    // 4. undefined
    // 5. null
    // 6. symbol
    // 7. bigint

// Non-Primitive / Reference => 8. Object
    // 1. Object
    // 2. Function - First Class Functions / Higher Order Functions
    // 2. Arrays

// Variables vs Constants

// Naming Rules
// 1. Either Camel Case or Snake case
// 2. Can have numbers. Can't start with numbers.
// 3. Can have few special characters. Can start with underscore (_) and dollar ($) 
// 4. Can't use reserved keywords

//Enabling Strict mode
"use strict";

var companyName = "Lowe's"; // old syntax
let city = 'Benga"luru"'; // new syntax - ES6 onwards
const workingHours = 8; // constant - ES6 onwards

// workingHours = 10; // gives an error

let salary = 50000; // can use underscore, int can have 2^52

// salary = false;

let designation;

let wfh = null;

let bonusPercent = 10;
let bonus =  salary / bonusPercent;

let bonus1 =  salary / bonusPercent;

// NaN
// let bonusPercent = 'xyz';
// let bonus = salary * bonusPercent / 100; // NaN/

// Infinity
// let bonusPercent = 0;
// let bonus =  salary / bonusPercent;


console.log(companyName);
console.log(city);
console.log(workingHours);
console.log(designation);
console.log(wfh);


console.log(salary);
console.log(bonus);

console.log(typeof companyName);
console.log(typeof salary);
console.log(typeof designation);
console.log(typeof wfh);

console.log(designation === wfh);
console.log(bonus === bonus1);
console.log(typeof bonus);



