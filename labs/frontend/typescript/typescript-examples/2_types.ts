let myName = "Anand";
console.log(myName);

//check this example -- Even when you don't specify the data type the variable has data type mapped to it. This is Implicit Typing
/*
let city = "Bengaluru"; // TS automatically sets data type for the variable
city = 44;
console.log(city);
*/

// assigning type like this will work fine without throwing errors

let lastName:any = true; // no initial value
lastName = "Kumar"; //assigning value
lastName = 1; //assigning another value but of diff data type
console.log(lastName);

