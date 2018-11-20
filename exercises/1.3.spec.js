const answer = require('./1.3');

describe('answer', () => {
  const examples = [
    [1, 1, 1],
    [2345238904, 234, 234890, 234, 230492035, 2, 234],
    [3456890, 234890, 23409, -23934, 64, 789],
    [1, 230948, 34590, 98345, 293847]
  ];

  examples.forEach(example => {
    it('should compute the correct answer', () => {
      const twoBiggestNums = example.sort((a, b) => b - a).slice(0, 2);
      let squares = [];
      twoBiggestNums.forEach(num => {
        const square = num * num;
        squares.push(square);
      });
      const sum = squares.reduce((sum, square) => sum + square, 0);
      const actual = answer(example);
      expect(actual).toBe(sum);
    });
  });
});
