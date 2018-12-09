const { factorial, piApprox } = require('./1.31');
const { getInts } = require('../../utils');

describe('$factorial & $piApprox', () => {
  const regularFactorial = int => {
    let total = 1;
    for (let currInt = int; currInt > 0; currInt--) total *= currInt;
    return total;
  };

  const ints = getInts(0, 20);

  const pi = 3.14159265359;
  let lastPiApproxError;

  ints.forEach(int => {
    test('$factorial should calculate the correct answer', () => {
      expect(factorial(int)).toBe(regularFactorial(int));
    });

    test('as $int gets larger, $piApprox should get more accurate', () => {
      const piApproxError = Math.abs(pi - piApprox(int));
      if (lastPiApproxError) {
        expect(piApproxError).toBeLessThan(lastPiApproxError);
      }
      lastPiApproxError = piApproxError;
    });
  });
});
