/* 
Simpson's Rule
Define a procedure that takes as arguments fn, x, limit, totalIntervals 
and returns the value of the integral, computed using Simpson's rule.
Use your procedure to integrate $cube between 0 and 1, with n = 100 and n = 1000.
*/

const generalSum = (updateMinFn, updateSumTermFn) => (min, max) => {
  const fastGeneralSum = (currMin, total = 0) =>
    currMin > max
      ? total
      : fastGeneralSum(updateMinFn(currMin), total + updateSumTermFn(currMin));

  return fastGeneralSum(min);
};

const integral = (fn, x, limit, dx) =>
  dx * generalSum(term => term + dx, fn)(x + dx / 2, limit);

const simpsonIntegral = (fn, x, limit, totalIntervals) => {
  if (totalIntervals % 2 !== 0) {
    console.error('totalIntervals must be an even integer');
    return 0;
  }

  const dx = (limit - x) / totalIntervals;
  const h = dx / 3;

  const getConstant = (function*() {
    while (true) for (let constant of [4, 2]) yield constant;
  })();

  const addDx = num => num + dx;

  const getNextSumTerm = term =>
    term === x || // first term
    (term < limit && addDx(term) >= limit) // last valid term
      ? fn(term) // do not multiply by constant
      : term >= limit
      ? 0 // we don't want area when term equals limit
      : fn(term) * getConstant.next().value; // multiply by constant

  return h * generalSum(addDx, getNextSumTerm)(x, limit);
};

module.exports = simpsonIntegral;
