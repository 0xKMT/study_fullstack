// const is block scoped - it is not function scoped
const PI = 3.14;
// PI = 3; // TypeError

// Object: binding cannot be changed, properties can be changed
const user = { name: 'Alice', age: 25 };
user.age = 26;    // OK — change property
// user = {};    // TypeError — re-assign

// Array: push/pop can be done, re-assign cannot be done
const items = [1, 2, 3, 4, 5, 6, 7];
console.log(items.push(4)); // OK
// push is a function that adds a new element to the end of the array
// and returns the new length of the array
// so the result is 8
// and the array is [1, 2, 3, 4, 5, 6, 7, 4]
// because push adds a new element to the end of the array
// and returns the new length of the array
// so the result is 8
// and the array is [1, 2, 3, 4, 5, 6, 7, 4]
console.log(items)
// because push adds a new element to the end of the array

console.log(items.pop(5)); // OK
// pop is a function that returns the last element of the array
// so the result is 5
// and the array is [1, 2, 3, 4]
// because pop removes the last element of the array
// and returns the removed element
// so the result is 5
// and the array is [1, 2, 3, 4]
// because pop removes the last element of the array
// and returns the removed element
console.log(items);
// items = []; // TypeError

// Use const for immutable values
const name = 'Alice';
// name = 'Bob'; // TypeError