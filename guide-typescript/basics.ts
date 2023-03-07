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

type Person = {
  // Type Alias
  name: string;
  age: number;
};
let torcida: Person[]; // Torcida são varias pessoas do type Pessoa

console.log(namesS);

// Functions and types

function add(a, b): number | string {
  // Funções podem retornar tipos definidos, bem como Union Types
  return a + b;
}

// Generics

function inserirAntes(array: any[], value) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = inserirAntes(demoArray, -1); // [-1,1,2,3]
/* 
updateArray[0].split("");
Erro em tempo de execução, pois é do tipo NUMBER e nao STRING
mas minha função permite "any[]"
*/

// Jeito correto com GENERICS:

function inserirAntesGenerics<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArrayGenerics = [1, 2, 3];

const updateArrayGenerics = inserirAntesGenerics(demoArray, -1); // [-1,1,2,3]
//updateArrayGenerics[0].split(""); //ERROR, pois agora reconhece que é number

// Classes
class Student {
  //firstName: string;
  //lastName: string;
  //age: number;
  //courses: string[];

  // Crio o construtor ja com as propriedades
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courses: string[]) {
    // this.courses = courses; //Jeito errado, aqui ele vai transformar os cursos recebidos
    this.courses = this.courses.concat(courses);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Paulo", "Reis", 23, ["Angular", "Typescript"]);
student.enrol(["HTML", "CSS", "JS"]);
// console.log(student.courses); // Nao pode mais pois cursos sao privados agora
console.log(student.listCourses());

// Interfaces

interface Game {
  // Interface Game
  title: string;
  yearCriation?: number;
  description: string;
  readonly genre: string; //readonly -> apenas possivel ler, nao modificar
  plataform?: string[]; //? -> passagem opcional
  getSimilars: (title: string) => void;
}

const pes: Game = {
  title: "Pro Evolution Soccer",
  yearCriation: 2023,
  description: "Melhor que FIFA",
  genre: "Esporte",
  plataform: ["PC", "XBOX", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Alguns jogos similares ao ${title}, é o FIFA e o BP`);
  },
};

//console.log(pes.getSimilars); // Imprimindo a FUNÇÃO, não o conteudo dela
console.log(pes.getSimilars(pes.title)); // Alguns jogos similares ao Pro Evolution Soccer, é o FIFA e o BP

interface DLC extends Game {
  // Minha DLC é algo que extende o meu Game, então preciso usar tudo de DLC + GAME
  originalGame: Game;
  newContent: string[];
}

const dataPack: DLC = { //TODO: Continua...
    title: "Pro Evolution Soccer "
};
