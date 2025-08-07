let account = {
   "id": 100,
   "type": 'Savings',
   "balance": 5000.0,
   "deposit" : function(amount) {
        console.log('Deposit Amount: ' + amount);
        // this keyword
        this.balance += amount;
   },
   "withdraw": function(amount) {
        console.log('Withdraw Amount: ' + amount);
        this.balance -= amount;
   }

} // Object Literal

console.log(account);

account.deposit(3000);
account.withdraw(2000);

console.log('Balance: ' + account.balance);

// Addes a property
account.name='Kunal';

console.log(account);

// Deletes a property
delete account.name;

console.log(account);

// Loop - For IN loop

for(let prop in account) {
    console.log(prop);
    console.log(account[prop]);
}
