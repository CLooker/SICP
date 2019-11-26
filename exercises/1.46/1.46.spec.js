const { getInts } = require('../../utils');
const { fixedPoint, getPhi } = require('../1.35/1.35');
const {
  iterativeImproveFixedPoint,
  iterativeImproveSqRt,
  precision,
  sqrt
} = require('./1.46');

const getIsWithinPrecision = (x, y) => Math.abs(x - y) <= precision;

getInts(1, 10).forEach(radicand => {
  const expected = Math.sqrt(radicand);

  describe('sqrt', () => {
    it('calculates the sqrt', () => {
      const actual = sqrt(radicand);
      const isWithinPrecision = getIsWithinPrecision(actual, expected);
      expect(isWithinPrecision).toBeTruthy();
    });
  });

  describe('iterativeImproveSqRt', () => {
    it('calculates the sqrt', () => {
      const actual = iterativeImproveSqRt(radicand);
      const isWithinPrecision = getIsWithinPrecision(actual, expected);
      expect(isWithinPrecision).toBeTruthy();
    });
  });
});

describe('iterativeImproveFixedPoint', () => {
  it('calculates phi', () => {
    const phiFn = x => 1 + 1 / x;
    const actual = iterativeImproveFixedPoint(phiFn);
    const expected = getPhi();
    const isWithinPrecision = getIsWithinPrecision(actual, expected);
    expect(isWithinPrecision).toBeTruthy();
  });
});
