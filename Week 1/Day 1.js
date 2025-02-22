// // Hoisting with var and let
// Example using var:
// console.log(a); // Outputs undefined
// var a = 10;
// console.log(a); // Outputs 10
//
// // Example using let:
// console.log(b); // Throws ReferenceError
// let b = 10;

// // Function Declaration
// sayHello(); // Outputs "Hello!"
//
// function sayHello() {
//     console.log("Hello!");
// }

// // Lexical Environment and Variable Shadowing
// let x = "Global value";
//
// function outer() {
//     let x = "Local value";
//
//     function inner() {
//
//         console.log(x);
//     }
//
//     inner();
// }
//
// outer();         // Outputs "Local value"
// console.log(x);  // Outputs "Global value"