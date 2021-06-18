//! FUNCTION BASICS

// let greet = () => {
//     console.log('hello, world');
// }

let greet: Function;

// greet = 'hello' this is already declared as a type function

greet = () => {
  console.log("hello, again"); // this is allowed since we already declared greet as a Function
};

// const add = (a: number, b: number, c?: number | string) => {
//   console.log(a + b);
//   console.log(c);
// };

// if we use default value, we do not the '?'
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);
