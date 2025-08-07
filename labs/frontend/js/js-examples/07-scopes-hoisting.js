// Global

// Local
//  Functional
//  Module
//  Block

// 'use strict';

// var id;

// Function Hoisting
// console.log(id);
// increment();
// console.log(id);
// decrement();
// console.log(id);

// Variable Hoisting

function increment(id) {
    // local scope
    // let id = 100;
    if(id > 0) {
        // block scope
        // let id = 100;
        id++;
    } else {
        console.log('Invalid no');
    }
    // id = 200;
    console.log(id);

}


function decrement(id) {
    // var id = 200;
    if(id > 0)
        id--;
    console.log(id);
}

// console.log(id);
increment(100);
// console.log(id);
decrement(200);
// console.log(id);

// var id = 100; // Hoisting
// let id = 100; // No Hoisting