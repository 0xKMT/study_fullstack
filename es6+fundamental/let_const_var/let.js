// let only exists in the nearest block {}. 
// Can re-assign value but cannot re-declare in the same scope.

let count = 0;
count++; // OK — can re-assign

if (true) {
  let blockScoped = 'only in this block';
  console.log(blockScoped); // OK
}
// console.log(blockScoped); // ReferenceError

if (true) {
    console.log(count); // no output because let only exists in the nearest block {}. 
}

console.log("count", count); // 1

// Use let in for loop — each iteration has its own scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
  // 0, 1, 2 — correct (var will give 3, 3, 3)
}