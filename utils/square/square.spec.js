const square = require('./square');

describe('square', () => {
  const ints = [4536, 456, 2345, 2325344, 234, 1345890, 234890];
  ints.forEach(int => {
    const actual = square(int);
    const expected = Math.pow(int, 2);
    it('should square integers correctly', () => {
      expect(actual).toBe(expected);
    });
  });
});
