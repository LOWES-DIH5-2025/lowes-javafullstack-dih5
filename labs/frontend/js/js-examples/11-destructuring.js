// Array Destructuring
let accTypes = ['Savings', 'Deposit', 'Current'];

let [, type2, type3] = accTypes;

// console.log(type1);
console.log(type2);
console.log(type3);

// Object Destructuring
let savings1 = {
    id: 123,
    balance: 99999.0,
    type: 'Savings'
}

let {id, balance, type} = savings1;
console.log(id);
console.log(balance);
console.log(type);