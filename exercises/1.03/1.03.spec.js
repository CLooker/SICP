const answer = require('./1.03');

describe('answer', () => {
  const numsColls = [
    [1, 1, 1],
    [2345238904, 234, 234890, 234, 230492035, 2, 234],
    [3456890, 234890, 23409, -23934, 64, 789],
    [1, 230948, 34590, 98345, 293847]
  ];

  numsColls.forEach(nums => {
    it('should compute the correct answer when passed an array of numbers', () => {
      const twoBiggestNums = nums.sort((a, b) => b - a).slice(0, 2);
      let squares = [];
      twoBiggestNums.forEach(num => {
        const square = num * num;
        squares.push(square);
      });

      const actual = answer(nums);
      const expected = squares.reduce((sum, square) => sum + square, 0);
      expect(actual).toBe(expected);
    });
  });

  it('should compute the correct answer when passed arguments of numbers', () => {
    expect(answer(1, 1, 1)).toBe(2);
    expect(answer(1, 10, 100)).toBe(100 * 100 + 100);
    expect(answer(55, 40, 75)).toBe(55 * 55 + 75 * 75);
    expect(answer(345, 2574, 23948, 90)).toBe(23948 * 23948 + 2574 * 2574);
  });
});
