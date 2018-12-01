const simpsonIntegral = require('./1.29');
const { getInts, isEven } = require('../../utils');

const cube = x => Math.pow(x, 3);

describe(`Simpson's Rule`, () => {
  const x = 0;
  const limit = 1;
  const solution = 1 / 4;
  let lastSolutionDiff;

  const totalIntervalsColl = getInts(100, 1000).filter(int => isEven(int));
  totalIntervalsColl.forEach(totalIntervals => {
    const simpsonIntegralSolution = simpsonIntegral(
      cube,
      x,
      limit,
      totalIntervals
    );
    test('$simpsonIntegral becomes more accurate as $totalIntervals increases', () => {
      const solutionDiff = solution - simpsonIntegralSolution;
      lastSolutionDiff
        ? expect(solutionDiff < lastSolutionDiff).toBeTruthy()
        : (lastSolutionDiff = solutionDiff);
    });
  });
});
