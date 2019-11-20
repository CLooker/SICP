const { square } = require('../../utils');
const repeated = require('./1.43');

describe('repeated', () => {
  it('repeats the fn application', () => {
    const actual = repeated(square, 2, 5);
    const expected = 625;
    expect(actual).toBe(expected);
  });
});
