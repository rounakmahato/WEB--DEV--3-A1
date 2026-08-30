
const logger = require("./modules/logger");


const [, , operation, arg1, arg2] = process.argv;

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
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function runCalculator() {
  
  if (!operation) {
    logger.error("No operation provided.");
    console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
  }

  const num1 = Number(arg1);
  const num2 = Number(arg2);

  
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    logger.error("Invalid numbers provided. Please pass two valid numbers.");
    console.log("Example: node calculator.js add 10 5");
    process.exit(1);
  }

  let result;

  switch (operation.toLowerCase()) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      try {
        result = divide(num1, num2);
      } catch (err) {
        logger.error(err.message);
        process.exit(1);
      }
      break;
    default:
      logger.error(`Unknown operation "${operation}".`);
      console.log("Supported operations: add, subtract, multiply, divide");
      process.exit(1);
  }

  console.log(`Result: ${result}`);
}

runCalculator();
