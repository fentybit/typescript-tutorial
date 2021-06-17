//! EXPLICIT TYPES

// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
// isLoggedIn = 25;
// we already explicitly give a varialble type
isLoggedIn = true;

// arrays
// let ninjas: string[];
// ninjas = ['yoshi', 'mario'];

let ninjas: string[] = [];
ninjas.push("shaun");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
// ninjaOne = ''; this would not work

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  beltColour: "black",
  // skills: [] ts doesn't allow additional properties
};
