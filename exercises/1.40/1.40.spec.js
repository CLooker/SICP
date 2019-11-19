const { averageDamp, cubic, deriv, newtonsMethod } = require('./1.40');

describe('averageDamp', () => {
  it('produces the answer on page 97', () => {
    const square = x => x * x;
    const actual = averageDamp(square, 10);
    const expected = 55;
    expect(actual).toBe(expected);
  });
});

describe('deriv', () => {
  it('produces the answer on page 100', () => {
    const cube = x => x * x * x;
    const actual = deriv(cube, 5);
    const expected = 75.00014999664018;
    expect(actual).toBe(expected);
  });
});

describe('cubic', () => {
  it(`with newtonsMethod approximates zeros of the cubic`, () => {
    const actual = newtonsMethod(cubic(1, 1, 1), 1);
    const expected = -0.9999999999997796;
    expect(actual).toBe(expected);
  });
});
