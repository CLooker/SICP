const { square } = require('../../utils');
const compose = require('./1.42');
const inc = x => ++x;

describe('compose', () => {
  it('compose functions', () => {
    const actual = compose(square, inc)(6);
    const expected = 49;
    expect(actual).toBe(expected);
  });
});
