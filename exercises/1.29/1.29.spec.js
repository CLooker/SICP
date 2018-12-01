const { integral, simpsonIntegral } = require('./1.29');
const { getInts, isEven } = require('../../utils');

const cube = x => Math.pow(x, 3);

describe(`Simpson's Rule`, () => {
  const x = 0;
  const limit = 1;
  const solution = 1 / 4;

  const totalIntervalsColl = getInts(100, 1000).filter(int => isEven(int));

  const isSimpsonMoreAccurate = totalIntervalsColl.every(totalIntervals => {
    const integralSolution = integral(cube, x, limit, 1 / totalIntervals);
    const simpsonIntegralSolution = simpsonIntegral(
      cube,
      x,
      limit,
      totalIntervals
    );
    return (
      Math.abs(solution - integralSolution) >
      Math.abs(solution - simpsonIntegralSolution)
    );
  });

  test(`$simpsonIntegral is better than $integral`, () => {
    expect(isSimpsonMoreAccurate).toBeTruthy();
  });
});
