const npmInts = require('nums');
const getInts = require('./getInts');

describe('getInts', () => {
  it('should get the ints you asked for', () => {
    expect(getInts(5)).toEqual(npmInts(5));
    expect(getInts(5, 10)).toEqual(npmInts(5, 10));
    expect(getInts(3, -2)).toEqual(npmInts(3, -2));
    expect(getInts(-7, 0)).toEqual(npmInts(-7, 0));
  });
});
