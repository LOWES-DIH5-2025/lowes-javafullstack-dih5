// app.js

// Importing functions from math.js
import { add, subtract, division} from './math.js';

import mul from './math.js';


// // Function to add two numbers
// function add(a, b) {
//   return a + b;
// }

// // Function to subtract two numbers
// function subtract(a, b) {
//   return a - b;
// }

// Using the imported functions
const resultAddition = add(5, 3);
const resultSubtraction = subtract(10, 7);

const resultMultiplication = mul(10, 5);
const resultDivision = division(20, 10);

// Logging the results
console.log(`Addition: ${resultAddition}`);
console.log(`Subtraction: ${resultSubtraction}`);
console.log(`Multiplication: ${resultMultiplication}`);
console.log(`Subtraction: ${resultDivision}`);
