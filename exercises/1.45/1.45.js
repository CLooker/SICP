/*
Do some experiments to determine how many average damps are required to
compute nth roots as a fixed-point search based upon repeated average damping
of y -> x/y^n-1. Use this to implement a simple procedure for computing nth
roots using $fixedPoint, $averageDamp, and $repeated.
*/
const { fixedPoint } = require('../1.35/1.35');
const repeated = require('../1.43/1.43');
const { averageDamp } = require('../1.40/1.40');

const nthRoot = (radicand, degree) => {
  const getRoot = y => radicand / Math.pow(y, degree - 1);

  const iterations = (function getIterations(ret = 1, currDegree = degree) {
    if (currDegree < 4) return ret;
    if (currDegree === 4) return ret + 2;
    return getIterations(ret + 1, currDegree / 2);
  })();

  const fixedPointInput = (function getFixedPointInput(
    ret = getRoot,
    currIteration = 0
  ) {
    return currIteration === iterations
      ? ret
      : getFixedPointInput(averageDamp(ret), currIteration + 1);
  })();

  return fixedPoint(fixedPointInput);
};

module.exports = nthRoot;
