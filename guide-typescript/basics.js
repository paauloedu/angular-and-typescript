// Primitives: nomes, strings, boolean
// Mode complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var torcida; // Torcida são varias pessoas do type Pessoa
console.log(namesS);
// Functions and types
function add(a, b) {
    // Funções podem retornar tipos definidos, bem como Union Types
    return a + b;
}
// Generics
function inserirAntes(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updateArray = inserirAntes(demoArray, -1); // [-1,1,2,3]
/*
updateArray[0].split("");
Erro em tempo de execução, pois é do tipo NUMBER e nao STRING
mas minha função permite "any[]"
*/
// Jeito correto com GENERICS:
function inserirAntesGenerics(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArrayGenerics = [1, 2, 3];
var updateArrayGenerics = inserirAntesGenerics(demoArray, -1); // [-1,1,2,3]
//updateArrayGenerics[0].split(""); //ERROR, pois agora reconhece que é number
// Classes
var Student = /** @class */ (function () {
    //firstName: string;
    //lastName: string;
    //age: number;
    //courses: string[];
    // Crio o construtor ja com as propriedades
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courses) {
        // this.courses = courses; //Jeito errado, aqui ele vai transformar os cursos recebidos
        this.courses = this.courses.concat(courses);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student("Paulo", "Reis", 23, ["Angular", "Typescript"]);
student.enrol(["HTML", "CSS", "JS"]);
// console.log(student.courses); // Nao pode mais pois cursos sao privados agora
console.log(student.listCourses());
var pes = {
    title: "Pro Evolution Soccer",
    yearCriation: 2023,
    description: "Melhor que FIFA",
    genre: "Esporte",
    plataform: ["PC", "XBOX", "PS4"],
    getSimilars: function (title) {
        console.log("Alguns jogos similares ao ".concat(title, ", \u00E9 o FIFA"));
    }
};
//console.log(pes.getSimilars); // Imprimindo a FUNÇÃO, não o conteudo dela
console.log(pes.getSimilars(pes.title));
