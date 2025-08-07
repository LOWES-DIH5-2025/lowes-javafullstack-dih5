// state - properties
// behaviour - functions

// Approach #1 - Object creation
let emp = { "id": 100, "name": "Ajay", "salary": 75000.0, "designation": "Software Engineer" };

console.log(emp);
console.log(typeof emp);

// Approach #1: dot notation
// emp.designation = 1000;
// console.log(emp.id + ' ' + emp.designation);

// // Approach #2: bracket notation
// let selection = 'name';
// console.log(emp[selection] + ' ' + emp['designation']);

// // let emp1 = { "id": 100, 
//     // "name": "Ajay", "salary": 75000.0, "designation": "Software Engineer" };/

// emp['address'] = {"city": "Bengaluru", "country": "India"};

// console.log(emp);

// Approach #2 - Object creation using Object 
// let dept = new Object();
// dept.id = 123;
// dept.name = 'Supply Chain';

// console.log(dept);

// Approach #3 - Object creation using constructor function
// function Department(id, name) {
//     this.id = id;
//     this.name = name;
// }

// Approach #4 - Object creation using Class
// class Department {
//     constructor(id, name) {
//         console.log('constructor(id, name)')
//         this.id = id;
//         this.name = name;
//     }

//     // Can't overload constructor
//     // constructor(id) {
//     //     console.log('constructor(id)')
//     //     this.id = id;
//     // }

//     getDept() {
//         return this.id;
//     }

    // Overloade will overwrite the fn defintion
    // getDept(name) {
    //     console.log('overloaded method');
    // }
// }

// let dept = new Department(123, 'Merchandise');

// console.log(dept);
// console.log(dept.getDept('Marketing'));

