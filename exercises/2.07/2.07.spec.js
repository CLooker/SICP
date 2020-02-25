const { lowerBound, makeInterval, upperBound } = require('./2.07');

describe('lowerBound/upperBound', () => {
  const a = 0;
  const b = 10;
  let interval;

  beforeEach(() => {
    interval = makeInterval(a, b);
  });

  it('selects the lower bound', () => {
    const expected = a;
    const actual = lowerBound(interval);
    expect(actual).toBe(expected);
  });

  it('selects the upper bound', () => {
    const expected = b;
    const actual = upperBound(interval);
    expect(actual).toBe(expected);
  });
});
