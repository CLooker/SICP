/*
Design a procedure that evolves an iterative exponentiation process that uses
successive squaring and uses a logarithmic number of steps.
*/

const { isEven, square } = require('../../utils');

const expt = (base, power) => {
  const fastExpt = (currBase, currPower, total) =>
    currPower === 0
      ? total
      : isEven(currPower)
      ? fastExpt(square(currBase), currPower / 2, total)
      : fastExpt(currBase, currPower - 1, total * currBase);

  return fastExpt(base, power, 1);
};

module.exports = expt;
