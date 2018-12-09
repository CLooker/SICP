/* 
Create $product. It returns the product of the 
values of a function at points over a given range. Show how to 
define $factorial in terms of $product. Also, use $product to
compute approximations to pi.
*/

const { isEven } = require('../../utils');

const product = (updateMinFn, updateSumTermFn) => (min, max) => {
  const fastProduct = (currMin, total = 1) =>
    currMin > max
      ? total
      : fastProduct(updateMinFn(currMin), total * updateSumTermFn(currMin));

  return fastProduct(min);
};

const inc = num => ++num;
const identity = x => x;

const factorial = int => product(inc, identity)(1, int);

const piApprox = int => {
  const updateSumTerm = int =>
    isEven(int) ? (int + 2) / inc(int) : inc(int) / (int + 2);

  return 4 * product(inc, updateSumTerm)(1, int);
};

module.exports = { factorial, piApprox };
