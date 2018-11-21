const compose = require('./compose');

describe('compose', () => {
  it('should combine simple functions to transform data correctly', () => {
    const add = a => b => a + b;
    const addOne = add(1);
    const addTen = add(10);
    const addFifty = add(50);

    const startingValue = 0;

    const actual = compose(
      addFifty,
      addOne,
      addTen
    )(startingValue);
    const expected = 61;
    expect(actual).toBe(expected);
  });
});
