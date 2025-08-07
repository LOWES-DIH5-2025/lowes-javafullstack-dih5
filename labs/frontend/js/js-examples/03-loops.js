// for
// while
// do..while

let accTypes = ['Savings', 'Deposit', 'Current'];

console.log('For Loop');
for(let i = 0; i < accTypes.length; i++) {
    console.log(accTypes[i]);
}

console.log('While Loop');
let counter = 0;
while(counter < accTypes.length) {
    console.log(accTypes[counter]);
    counter++;
}

// TODO: do...while

console.log('ForEach Loop');
// ForEach loop
accTypes.forEach(element => {
    console.log(element);
});