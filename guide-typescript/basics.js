// Primitives: nomes, strings, boolean
// Mode complex types: arrays, objects
// Function types, parameters
// Primitives
var age;
var userName;
var isInstrucor;
var hobbies;
var person;
var people;
age = 12.1;
userName = "Paulo";
isInstrucor = true;
hobbies = ["Sports", "Cooking", "Working"];
person = {
    name: userName,
    age: age
};
// Type inference
// Union Types
var course = "Angular - The Complete Guide";
var namesS;
(namesS = "Paulo"), "Eduardo";
console.log(namesS);
