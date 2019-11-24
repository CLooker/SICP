const { getInts } = require('../../utils');
const nthRoot = require('./1.45');

describe('nthRoot', () => {
  const radicands = getInts(1, 10);
  const degrees = [2, 4, 16, 32, 64, 128, 256];
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
