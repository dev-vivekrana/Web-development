// variables

// declaration meanss first step of creating variable
var a;
// then comes initialization , means giving value to it
a = 10;
//   both can be done in single step
// declaration + initialization
var b = 9;
console.log("a:", a);

//  Primitive data types
// 1. Number
console.log(1);
// 2. string
console.log("hello");
// 3 boolean
console.log(true);
// 4 undefined
// means ki variable declare kr diya but hasn't initialize yet
var c;
console.log("c:", c);
// 5 null
//  when we want intentionally a variable to empty; in intialize + declare but we want variable to be empty
var d = null;
console.log("d:", d);
// 6 big int
var e = 12374875837488593478n;
console.log("e:", e);
// 7 symbol
// when we want to unoque values even though there data is same .
var x = 10;
var y = 10;
console.log(x == y);
// but in symbols
var s1 = Symbol(10);
var s2 = Symbol(10);
console.log(s1 == s2);

// 1 alert()
// var a1 = alert("Thiss is warning from alert")
// console.log('a1:', a1);
// alert does not store any result

// 2 confirm()
// var result = confirm("This is only for men , are u a men");
// console.log('result:', result);

// 3 prompt() - to take input from the user
// var user = prompt('Men or Women');
// console.log('user:', user);
// console.log(typeof(user));
// console.log(null==user);

// concept of trth and falsy values
//  falsy values are  - 0 , false , null , empty string , undefined , NaN
// All other are truthy values

//  Very Good use of OR operator
// let name = prompt("Enter your naeme") || "guest";
// console.log('name:', name);

// Ternary operator - bst for small if -else condition
let age = 1;
let vote = age >= 18 ? "yes" : "no";
console.log("vote:", vote);

// string  - mostly prefered template literals
// console.log(`My name is ${name} and my vote status is ${vote}`);

//  Useful sstring methods
let s = "hello world";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.indexOf("world"));
console.log(s.includes("world"));
console.log(s.slice(2, 5));
console.log(s.substring(2, 5));
console.log(s.replace("world", "vivek"));
console.log(s.split(""));
console.log("      hi".trim());
console.log("rana".repeat(3));
console.log(s.startsWith("hello"));
console.log(s.endsWith("ld"));
console.log(s.charAt(8));
console.log(s[8]);

// Important note that strings are immutable and these methods does not change the original string

console.log("s:", s);

// Number and some important methods

// let n = 3.14159;

console.log(n.toFixed(2)); // "3.14" (returns string!)
console.log(Number("42")); // 42
console.log(Number("42abc")); // NaN
console.log(parseInt("42px")); // 42 (parses what it can)
console.log(parseFloat("3.14kg")); // 3.14
console.log(isNaN("hello")); // true
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

//  to generate a radom number between min and max  (let us say we want 1-7)
let min = 3;
let max = 7;
let number = Math.floor(Math.random() * (max - min + 1) + min);
console.log("number:", number);

// conditionals
if ([]) {
  console.log("hello");
} else {
  console.log("hi");
}

// switch
let day = "monday";
switch (day) {
  case "sunday":
    console.log("yeeeaah");
    break;
  case "monday":
    console.log("oh no");
    break;
  default:
    console.log("bye");
}

// loops
// let pass = "123";
// let userpass = prompt("enter your pass");
// while(pass != userpass){
// userpass = prompt("Enter correct pass")
// }123

// ### Project 2: FizzBuzz (the classic interview question)

// Print numbers 1 to 50. But:

// - For multiples of 3, print "Fizz"
// - For multiples of 5, print "Buzz"
// - For multiples of both, print "FizzBuzz"

// for (let i = 1; i <= 50; i++) {
//   if (i % 15 == 0) console.log(i, "FizzBuzz");
//   else if (i % 3 == 0) console.log(i, "Fizz");
//   else if (i % 5 == 0) console.log(i, "Buzz");
// }

// Project 5: Count Vowels in a String
let string = "aea;dksfoeiruoiuoiajdifiqueiuropiupiojas"
let vowels = "aeiou"
let count = 0 ;
// using for of loops
for(char of string){
    if(vowels.includes(char)) count++
}
console.log('count:', count);

// -----------------------------------------------------------

// JavaScript Phase 02
// Javascript phase 03 internal working
// test and practice session
// Phase 04 - Object deeper understanding and learnt about this keyword
// strict mode in js and all types of errors
// "this" keyoword , its different behaviour 
// call apply bind method
// prototype & Prototypal inheritance
// async js
// event loop call back queue and promises
// promises in detail