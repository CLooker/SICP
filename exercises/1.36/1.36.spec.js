const {
  dampSolution,
  dampGuessesTotal,
  damplessSolution,
  damplessGuessesTotal
} = require('./1.36');

describe('modified $fixedPoint', () => {
  test('both solutions are within the tolerance', () => {
    expect(Math.abs(dampSolution - damplessSolution)).toBeLessThan(0.00001);
  });

  test('using average damping requires less guesses', () => {
    expect(dampGuessesTotal).toBeLessThan(damplessGuessesTotal);
  });
});
