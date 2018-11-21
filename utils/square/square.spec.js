const square = require('./square');

describe('square', () => {
  const nums = [4536, 456, 2345, 2325344, 234, 1345890, 234890];
  nums.forEach(num => {
    const actual = square(num);
    const expected = Math.pow(num, 2);
    it('should square numbers correctly', () => {
      expect(actual).toBe(expected);
    });
  });
});
