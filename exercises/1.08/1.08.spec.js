const { getInts } = require('../../utils');
const { cubeRoot, precision } = require('./1.08');

describe('cubeRoot', () => {
  getInts(1, 50).forEach(radicand => {
    it('calculates the cube root', () => {
      const actual = cubeRoot(radicand);
      const expected = Math.pow(radicand, 1 / 3);
      const isWithinPrecision = Math.abs(actual - expected) < precision;
      expect(isWithinPrecision).toBeTruthy();
    });
  });
});
