const { fRec, fIter } = require('./1.11');
const { getInts } = require('../../utils');

describe('1.11', () => {
  getInts(0, 10).forEach(int => {
    it('should produce the same answer for both functions', () => {
      expect(fRec(int)).toBe(fIter(int));
    });
  });
});
