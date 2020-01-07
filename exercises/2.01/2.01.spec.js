const { getIsPositive, makeRat } = require('./2.01');

describe('makeRat', () => {
  it('returns positive numerator/denominator when the rational number is positive', () => {
    const numerator = 1;
    const denominator = 1;
    const rat = makeRat(numerator, denominator);
    expect(rat.every(getIsPositive)).toBeTruthy();

    const rat2 = makeRat(-numerator, -denominator);
    expect(rat2.every(getIsPositive)).toBeTruthy();
  });

  it('returns a negative numerator and positive denominator when the rational number is negative', () => {
    const numerator = -1;
    const denominator = 1;
    const rat = makeRat(numerator, denominator);
    expect(getIsPositive(rat[0])).toBeFalsy();
    expect(getIsPositive(rat[1])).toBeTruthy();

    const rat2 = makeRat(-numerator, -denominator);
    expect(getIsPositive(rat2[0])).toBeFalsy();
    expect(getIsPositive(rat2[1])).toBeTruthy();
  });
});
