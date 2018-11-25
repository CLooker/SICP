const add = require('./add');

describe('add', () => {
  const numsColls = [
    [237894, 345690, 234, 90234, 23459],
    [2348, 234908, 234890, 2347, 890],
    [2, 23904, 90, 2, 456, 23],
    [890, 64, 4786, 123, 4786]
  ];

  numsColls.forEach(nums => {
    it('should add the numbers in arrays up', () => {
      const actual = add(nums);
      const expected = nums.reduce((sum, num) => sum + num, 0);
      expect(actual).toBe(expected);
    });
  });

  it('should add up number arguments', () => {
    expect(add(1, 2, 3, 4, 5, 6)).toBe(21);
    expect(add(10, 20, 30, 40, 50)).toBe(150);
    expect(add(500, 500, 500, 500)).toBe(2000);
  });
});
