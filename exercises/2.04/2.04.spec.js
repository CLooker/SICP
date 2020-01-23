const { car, cdr, cons } = require('./2.04');

describe('alternative representation for pairs', () => {
  const x = 'foo';
  const y = 'bar';
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
