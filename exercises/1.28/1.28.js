/* 
Miller-Rabin Primality Test
*/

const { getInts, isEven, square } = require('../../utils');

const isPrime = int => {
  if (int === 2) return true;
  if (isEven(int)) return false;

  const expmod = (base, exp, divisor) => {
    switch (true) {
      case exp === 0:
        return 1;
      case isEven(exp):
        const isTrivialSqRt = (sqRt, squared) =>
          [1, int - 1].some(trivialSqRt => trivialSqRt === sqRt) ||
          squared % divisor !== 1;
        const sqRt = expmod(base, exp / 2, divisor);
        const squared = square(sqRt);
        return isTrivialSqRt(sqRt, squared) ? squared % divisor : 0;
      default:
        return (base * expmod(base, exp - 1, divisor)) % divisor;
    }
  };

  return getInts(1, int - 1).every(
    currInt => currInt === expmod(currInt, int, int)
  );
};

module.exports = isPrime;
