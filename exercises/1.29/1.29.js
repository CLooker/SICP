/* 
Simpson's Rule
Define a procedure that takes as arguments fn, x, limit, totalIntervals 
and returns the value of the integral, computed using Simpson's rule.
Use your procedure to integrate $cube between 0 and 1, with n = 100 and n = 1000.
Compare your results to $integral.
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
  const dx = (limit - x) / totalIntervals;

  const getConstant = (function*() {
    while (true) for (let constant of [4, 2]) yield constant;
  })();

  const getNextSumTerm = term =>
    fn(term * dx + x) *
    ([0, totalIntervals].includes(term) ? 1 : getConstant.next().value);

  const inc = num => ++num;

  return (dx * generalSum(inc, getNextSumTerm)(0, totalIntervals)) / 3;
};

module.exports = { integral, simpsonIntegral };
