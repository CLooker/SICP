/*
  Define a procedure contFrac such that evaluating contFrac(n, d, k) computes 
  the value of the k-term finite continued fraction. Check your procedure
  by approximating 1/phi (phi === golden ratio) using contFrac(1, 1, k).

  If your contFrac generates a recursive process, write on that generates an
  iterative process, or vice versa.
*/

const contFrac = (getNumeratorFn, getDenominatorFn, terminationStep) => {
  const _cF = (currStep, total) =>
    currStep === terminationStep
      ? total
      : _cF(
          currStep + 1,
          getNumeratorFn(currStep) / (getDenominatorFn(currStep) + total)
        );

  return _cF(0, 1);
};

const contFracIter = (getNumeratorFn, getDenominatorFn, terminationStep) => {
  let total = 1;

  for (let currStep = 0; currStep < terminationStep; currStep++) {
    total = getNumeratorFn(currStep) / (getDenominatorFn(currStep) + total);
  }

  return total;
};

module.exports = {
  contFrac,
  contFracIter
};
