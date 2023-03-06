// Primitives: nomes, strings, boolean
// Mode complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
let userName: string;
let isInstrucor: boolean;
let hobbies: string[];
let person: {
  name: string;
  age: number;
};
let people: {
  //People sao varias pessoas
  name: string;
  age: number;
}[];

age = 12.1;
userName = "Paulo";
isInstrucor = true;
hobbies = ["Sports", "Cooking", "Working"];
person = {
  name: userName,
  age: age,
};

// Type inference

// Union Types
let course: string | number = "Angular - The Complete Guide";
let namesS: string | string[];

(namesS = "Paulo"), "Eduardo";

console.log(namesS);
