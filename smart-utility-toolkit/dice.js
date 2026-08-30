
const crypto = require("crypto");
const logger = require("./modules/logger");


  @returns {number} A value between 1 and 6 inclusive.
 
function rollDice() {
  
  return crypto.randomInt(1, 7);
}

function rollMultiple(times) {
  const results = [];
  for (let i = 1; i <= times; i++) {
    const value = rollDice();
    results.push(value);
    console.log(`Roll ${i}: Dice Rolled: ${value}`);
  }
  return results;
}

const rolls = Number(process.argv[2]) || 1;

logger.info(`Rolling the dice ${rolls} time(s)...`);
const results = rollMultiple(rolls);

if (rolls > 1) {
  const total = results.reduce((sum, val) => sum + val, 0);
  console.log(`\nAll rolls: [${results.join(", ")}]`);
  console.log(`Total: ${total} | Average: ${(total / rolls).toFixed(2)}`);
}
