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
// if we don't return something, it can still represent a lack of return value with ':void'
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, "20");

// if you have a bigger function, you can add ':number'
const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
// result = 'something else' we can not change the type, it's automatically inferred
