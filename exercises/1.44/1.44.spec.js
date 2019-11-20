const { getInts, pipe } = require('../../utils');
const { nFoldSmooth, smooth } = require('./1.44');
const square = x => x * x;
const dx = 0.0001;
const x = 10;

describe('smooth', () => {
  it('smooths', () => {
    const actual = smooth(square, dx, x);
    const expected = (square(x - dx) + square(x) + square(x + dx)) / 3;
    expect(actual).toBe(expected);
  });
});

describe('nFoldSmooth', () => {
  const smoothSquare = smooth(square, dx);

  getInts(1, 5).forEach(currIterations => {
    it('repeatedly smooths', () => {
      const actual = nFoldSmooth(square, dx, currIterations, x);
      const smoothSquareFns = Array.from(
        { length: currIterations },
        _ => smoothSquare
      );
      const expected = pipe(...smoothSquareFns)(x);
      expect(actual).toBe(expected);
    });
  });
});
