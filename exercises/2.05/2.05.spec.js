const { car, cdr, cons } = require('./2.05');

describe('represent pairs of positive integers as an integer', () => {
  const x = 2;
  const y = 4;
  const pair = cons(x, y);

  test('car works', () => {
    const actual = car(pair);
    const expected = x;
    expect(actual).toBe(expected);
  });

  test('cdr works', () => {
    const actual = cdr(pair);
    const expected = y;
    expect(actual).toBe(expected);
  });
});
