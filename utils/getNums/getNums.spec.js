const npmNums = require('nums');
const getNums = require('./getNums');

describe('getNums', () => {
  it('should get the nums you asked for', () => {
    expect(getNums(5)).toEqual(npmNums(5));
    expect(getNums(5, 10)).toEqual(npmNums(5, 10));
    expect(getNums(3, -2)).toEqual(npmNums(3, -2));
    expect(getNums(-7, 0)).toEqual(npmNums(-7, 0));
  });
});
