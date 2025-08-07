let savings1 = {
    id: 123,
    balance: 99999.0,
    type: 'Savings'
}

let savings2 = {...savings1};
savings2.balance = 88888.0;
savings2.type = 'Deposit';

console.log(savings1);
console.log(savings2)
