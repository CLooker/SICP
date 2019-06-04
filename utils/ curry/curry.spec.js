const curry = require('./curry');

describe('curry', () => {
  const fn = (a, b, c, d) => a + b + c + d;

  it('does not call the fn if not enough args are given', () => {
    const curried = curry(fn);

    curried(1);

    const actual = typeof curried;

    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('calls the fn if enough args are given', () => {
    const curried = curry(fn);

    const actual = curried(1, 1, 1, 1);

    const expected = 4;

    expect(actual).toBe(expected);
  });
});
