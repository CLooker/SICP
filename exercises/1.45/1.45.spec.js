const { getInts } = require('../../utils');
const nthRoot = require('./1.45');

describe('nthRoot', () => {
  const radicands = getInts(1, 10);
  const degrees = (function getDegrees(ret = [2]) {
    const last = ret[ret.length - 1];
    return last === 256 ? ret : getDegrees(ret.concat(last * 2));
  })();
  const precision = 0.00001;

  radicands.forEach(radicand => {
    degrees.forEach(degree => {
      const actual = nthRoot(radicand, degree);
      const expected = Math.pow(radicand, 1 / degree);
      const isWithinPrecision = Math.abs(actual - expected) <= precision;
      test(`radicand = ${radicand}, degree = ${degree}, nthRoot = ${actual}, expected = ${expected}`, () => {
        expect(isWithinPrecision).toBeTruthy();
      });
    });
  });
});
