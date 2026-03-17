// Scope examples in JavaScript
// 1) Global scope
const globalTitle = 'Global scope value';

function showGlobal() {
  console.log('Global:', globalTitle); // can access global variable
}

showGlobal();

// 2) Function scope
function functionScopeExample() {
  var functionScoped = 'Only inside this function';
  console.log('Function scope:', functionScoped); // OK
}

functionScopeExample();
// console.log(functionScoped); // ReferenceError

// 3) Block scope (let/const)
if (true) {
  let blockScopedLet = 'Block scope with let';
  const blockScopedConst = 'Block scope with const';
  console.log(blockScopedLet); // OK
  console.log(blockScopedConst); // OK
}

// console.log(blockScopedLet); // ReferenceError
// console.log(blockScopedConst); // ReferenceError

// 4) Block does NOT scope var
if (true) {
  var varNotBlockScoped = 'var leaks out of block';
}
console.log(varNotBlockScoped); // OK
