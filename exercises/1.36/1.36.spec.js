const {
  damplessGuessesTotal,
  damplessSolution,
  dampGuessesTotal,
  dampSolution,
  fixedPointTolerance
} = require('./1.36');

describe('modified $fixedPoint', () => {
  test('both solutions are within the tolerance', () => {
    expect(Math.abs(dampSolution - damplessSolution)).toBeLessThan(
      fixedPointTolerance
    );
  });

  test('using average damping requires less guesses', () => {
    expect(dampGuessesTotal).toBeLessThan(damplessGuessesTotal);
  });
});
