/*
  Define a procedure contFrac such that evaluating contFrac(n, d, k) computes 
  the value of the k-term finite continued fraction. Check your procedure
  by approximating 1/phi (phi === golden ratio) using contFrac(1, 1, k).

  If your contFrac generates a recursive process, write on that generates an
  iterative process, or vice versa.
*/

const contFrac = (getNumeratorFn, getDenominatorFn, maxCalculations) => {
  const _cF = (currStep, total) =>
    currStep === 0
      ? total
      : _cF(
          currStep - 1,
          getNumeratorFn(currStep) / (getDenominatorFn(currStep) + total)
        );

  return _cF(maxCalculations, 0);
};

const contFracIter = (getNumeratorFn, getDenominatorFn, maxCalculations) => {
  let total = 0;

  for (let currStep = maxCalculations; currStep > 0; currStep--) {
    total = getNumeratorFn(currStep) / (getDenominatorFn(currStep) + total);
  }

  return total;
};

module.exports = {
  contFrac,
  contFracIter
};
