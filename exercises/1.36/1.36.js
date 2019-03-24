/* 
  Modify $fixedPoint so that it prints the sequence of approximations it generates.
  Then find a solution to x^x = 1000 by finding a fixed point of x -> log(1000)/log(x).
  Compare the number of steps this takes with and without average damping.
*/

const fixedPointModified = (fn, firstGuess = 1) => {
  let guessesTotal = 0;

  const fastFixedPoint = currGuess => {
    const nextGuess = fn(currGuess);

    // uncomment for logging if you want it
    // console.log('nextGuess: ', nextGuess);

    guessesTotal++;

    return Math.abs(currGuess - nextGuess) < 0.00001
      ? nextGuess
      : fastFixedPoint(nextGuess);
  };

  return [fastFixedPoint(firstGuess), guessesTotal];
};

const [dampSolution, dampGuessesTotal] = fixedPointModified(
  x => 0.5 * (x + Math.log(1000) / Math.log(x)),
  2
);

const [damplessSolution, damplessGuessesTotal] = fixedPointModified(
  x => Math.log(1000) / Math.log(x),
  2
);

module.exports = {
  dampSolution,
  dampGuessesTotal,
  damplessSolution,
  damplessGuessesTotal
};
