const { add, one, two } = require('./2.06');

describe('church numerals', () => {
  it('adds', () => {
    const actual = add(one, two, n => ++n, 1);
    const expected = 4;
    expect(actual).toBe(expected);
  });
});
