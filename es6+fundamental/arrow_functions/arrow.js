// Syntax — from long to short`

// 1. Function declaration
function add(a, b) { return a + b; }
console.log('traditional ', add(1, 2));

// 2. Function expression
const addExpression = function(a, b) { 
    return a + b; 
};
console.log('function expression', addExpression(1, 2));

// 3. Function Arrow
const addArrow = (a, b) => {
    return a + b;
};
console.log('function arrow', addArrow(1, 2));

// 4. Function Arrow implicit return
const addArrowImplicit = (a, b) => a + b;
console.log('function arrow implicit', addArrowImplicit(1, 2));