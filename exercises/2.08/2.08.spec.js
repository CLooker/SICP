const { makeInterval } = require('../2.07/2.07');
const { subInterval } = require('./2.08');

describe('subInterval', () => {
  it('subtracts intervals', () => {
    const intervalA = makeInterval(0, 10);
    const intervalB = makeInterval(20, 50);
    const expected = makeInterval(20, 40);
    const actual = subInterval(intervalA, intervalB);
    expect(actual).toEqual(expected);
  });
});
