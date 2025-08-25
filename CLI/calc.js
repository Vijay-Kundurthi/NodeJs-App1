#!/usr/bin/env node

const args = process.argv.splice(2);

[num1, operator, num2] = args;

const a = parseFloat(num1);
const b = parseFloat(num2);

if(isNaN(a) && isNaN(b)) {
    console.log('Please provide numbers');
    process.exit();
}

switch (operator) {
  case "+":
    console.log(`Addtion: ${a + b}`);
    break;
  case "-":
     console.log(`Subtract: ${a + b}`);
    break;
  case "*":
     console.log(`Multiply: ${a * b}`);
    break;
  case "/":
     if (b === 0) {
        console.log('Zero can not be dividable...');
     } else {
        console.log(`Divided: ${a / b}`);
     }
    break;
  default: 
    console.log('Operator must be one of the (*, +, -,/)')
}