//This is normal JS function
// function add(x , y ){
//   console.log(x + y);
//   return x + y;
// }
// add(10, 20); 


// Rest params in Ts
function add(x : number, ...rest: number[]) :number  { 
  console.log(rest);
  return x + rest[0];
}

console.log(add(10, 20, 30, 40, 50));

// other possible return types in TS -- all other primitive data types, any, void, never 