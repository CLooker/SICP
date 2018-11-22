const { fRec, fIter } = require('./1.11');
const { getNums } = require('../../utils');

describe('1.11', () => {
  const nums = getNums(0, 10);

  nums.forEach(num => {
    it('should produce the same answer for both functions', () => {
      expect(fRec(num)).toBe(fIter(num));
    });
  });
});
