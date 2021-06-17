// arrays
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(3); it only lets you push a string
// names[0] = 3;

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push('shaun'); it only lets you push a number
// numbers[1] = 'shaun';

let mixed = ["ken", 4, "chun-li", 8, 9];
// ts will see as an array with strings and numbers

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'] ts can not add additional properties to it

// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
// }
// ts need the exact same structures -- properties, types
