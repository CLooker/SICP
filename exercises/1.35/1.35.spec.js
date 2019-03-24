const { getPhi } = require('./1.35');

describe('fixed point transformations', () => {
  test('that the golden ratio is a fixed point transformation x -> 1 + 1/x', () => {
    const realPhi = (1 + Math.sqrt(5)) / 2;
    const tolerance = 0.00001;
    expect(Math.abs(getPhi() - realPhi)).toBeLessThanOrEqual(tolerance);
  });
});
