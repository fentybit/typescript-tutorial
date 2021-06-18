"use strict";
//! FUNCTION BASICS
// let greet = () => {
//     console.log('hello, world');
// }
var greet;
// greet = 'hello' this is already declared as a type function
greet = function () {
    console.log("hello, again"); // this is allowed since we already declared greet as a Function
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
