// What if we have a really complex object with so many diff property types?
//example:
let exampleObj: { name: string, zipcode: number, skills: string[], hasExperience: boolean } = {
  name: "Sanjay",
  zipcode: 560001,
  skills: ["React", "Node"],
  hasExperience: true
}
// the skeleton/ blueprint is complex. if we want the same skeleton in another variable, we need to copy, paste it.
// So lets rewrite it here using type alias or custom data types

//use type keyword to create custom types
type MyObjType = { name: string, zipcode: number, skills: string[], hasExperience: boolean }; 

let exampleObj1: MyObjType = {
  name: "Kumar",
  zipcode: 560001,
  skills: ["React", "Node"],
  hasExperience: true
}

interface MyObjType1 {
  name: string;
  zipcode: number;
  skills: string[];
  hasExperience: boolean;
}

let exampleObj2: MyObjType1 = {
  name: "Kumar",
  zipcode: 560001,
  skills: ["React", "Node"],
  hasExperience: true
}

console.log(exampleObj1)
console.log(exampleObj2)