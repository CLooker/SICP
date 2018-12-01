const sum = require('./sum');

describe('sum', () => {
  const numsColls = [
    [237894, 345690, 234, 90234, 23459],
    [2348, 234908, 234890, 2347, 890],
    [2, 23904, 90, 2, 456, 23],
    [890, 64, 4786, 123, 4786]
  ];

  numsColls.forEach(nums => {
    it('should sum the integers in arrays up', () => {
      const actual = sum(nums);
      const expected = nums.reduce((total, num) => total + num, 0);
      expect(actual).toBe(expected);
    });
  });

  it('should sum up integer arguments', () => {
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
    expect(sum(10, 20, 30, 40, 50)).toBe(150);
    expect(sum(500, 500, 500, 500)).toBe(2000);
  });
});
