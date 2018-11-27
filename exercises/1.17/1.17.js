/* 
  With operations $double and $halve, design a multiplication procedure
  that uses a logarithmic integer of steps.
*/
const { isEven } = require('../../utils');
const double = num => num + num;
const halve = num => num / 2;

const multiply = (a, b) => {
  const fastMultiply = (currA, currB, total) =>
    currB === 0
      ? total
      : isEven(currB)
      ? fastMultiply(double(currA), halve(currB), total)
      : fastMultiply(currA, currB - 1, total + currA);

  return fastMultiply(a, b, 0);
};

const altMultiply = (a, b) => {
  let total = 0;
  for (let currA = a, currB = b; currB > 0; ) {
    if (isEven(currB)) {
      currA = double(currA);
      currB = halve(currB);
    } else {
      total += currA;
      currB--;
    }
  }
  return total;
};

module.exports = { multiply, altMultiply };
