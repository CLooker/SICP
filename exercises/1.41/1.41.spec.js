const double = require('./1.41');
const inc = x => ++x;

describe('double', () => {
  it('applies the arguemtn twice', () => {
    const actual = double(double)(double)(inc)(5);
    const expected = 21;
    expect(actual).toBe(expected);
  });
});
