// var is function scoped - it is not block scoped
// 1. Hoisting - no error even if used before declaration
// Hoisting is the process of moving the declaration of variables 
// and functions to the top of their scope before code execution.

console.log(hoisted_var); // undefined - var is hoisted
var hoisted_var = 'Hoisted';

console.log(hoisted_let); // ReferenceError - let is not hoisted
let hoisted_let = 'Hoisted';

// 2. Block scope — if/for does not create new scope
if (true) {
  var secret = 'leaked!';
  let secret_block = 'leaked 2!';
  console.log(secret_block); // 'leaked 2!' - let can access inside block
}
console.log(secret); // 'leaked!' — var can access outside block
console.log(secret_block); // ReferenceError - let have block scope

// 3. Re-declare
var user = 'Alice';
var user = 'Bob'; // No error - var can be re-declared

// let user1 = "Max";
// let user1 = "John"; // SyntaxError - let cannot be re-declared
