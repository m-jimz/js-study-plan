// no error
let message = "Hello";
message = 123456;

// dynamically typed: we are allowed to change the data type of the variable


let n = 123;
n = 12.345;

console.log( 1 / 0); // Infinity

console.log(Infinity); // Infinity  

console.log( "not a number " / 2); // Nan, such division is erroneous

console.log

// BigInt: for big numbers

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt

const bigInt = 1234567890123456789012345678901234567890n;

// strings are surrounded by quotes. There are three types of quotes
// double, single and backticks

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = 'can embed another ${str}';

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

// backticks allow a string to span multiple lines

let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
console.log(isGreater); // true

let age = 15
console.log(age);

let age1 = 100;
age = undefined;
console.log(age); undefined

typeof 0

typeof 10n 

typeof true

typeof "foo"

typeof Symbol("id")

typeof Math
typeof null
typeof console.log

// string quotes

