var ename:string = 'Saravana'
console.log(ename)

// TypeScript Examples

var z; // valid  === var z: any;
console.log(typeof z);
z = 100;
console.log(typeof z);

// Typescript => (TSC) => JS

var colors1: any[] = ["red", "green"];
colors1 = [10, 20];
var colors2: Array<any> = ["red", "green"];


// custom data type
type Employee = {
    id: number | string, // union type
    name: string,
    email?: string, // optional property
}

var employee1: Employee = {
    id: 1212343,
    name: "Steve",
    email: "s@t.com"
}

var employee2: Employee = {
    id: "54657898",
    name: "John"
}