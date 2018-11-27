const map = require('./map');
const { getInts } = require('../');

describe('map', () => {
  it('should map', () => {
    const add = a => b => a + b;
    const addTen = add(10);
    const ints = getInts(10);
    const actual = map(addTen)(ints);
    const expected = ints.map(addTen);
    expect(actual).toEqual(expected);
  });
});
