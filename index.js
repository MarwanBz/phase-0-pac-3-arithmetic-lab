// Implementing basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // Handling divide by zero error
  if (b === 0) {
    return 'undefined';
  }
  
  return a / b;
}

function increment(n) {
  return ++n;
}

function decrement(n) {
  return --n;
}

// Implementing makeInt(n) function
function makeInt(n) {
  let parsed = parseInt(n, 10);
  
  // Check if parsed is NaN or not, returning parsed value or NaN
  return isNaN(parsed) ? NaN : parsed;
}

// Implementing preserveDecimal(n) function
function preserveDecimal(n) {
  let parsed = parseFloat(n);
  
  // Check if parsed is NaN or not, returning parsed value or NaN
  return isNaN(parsed) ? NaN : parsed;
}
