/* 
Create $product. It returns the product of the 
values of a function at points over a given range. Show how to 
define $factorial in terms of $product. Also, use $product to
compute approximations to pi.
*/

const { compose, isEven } = require('../../utils');

const product = (updateMinFn, updateTermFn) => (min, max) => {
  const fastProduct = (currMin, total = 1) =>
    currMin > max
      ? total
      : fastProduct(updateMinFn(currMin), total * updateTermFn(currMin));

  return fastProduct(min);
};

const inc = num => ++num;
const identity = x => x;

const factorial = int => product(inc, identity)(1, int);

const piApprox = int => {
  const addTwo = compose(
    inc,
    inc
  );
  const updateTerm = int =>
    isEven(int) ? addTwo(int) / inc(int) : inc(int) / addTwo(int);

  return 4 * product(inc, updateTerm)(1, int);
};

module.exports = { factorial, piApprox, product };
