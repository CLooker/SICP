/* 
Show that the golden ratio is a fixed point of the transformation x -> 1 + 1/x,
and use this fact to compute phi.
*/

const fixedPoint = (fn, firstGuess = 1) => {
  const fastFixedPoint = currGuess => {
    const nextGuess = fn(currGuess);

    return Math.abs(currGuess - nextGuess) < 0.00001
      ? nextGuess
      : fastFixedPoint(nextGuess);
  };

  return fastFixedPoint(firstGuess);
};

const getPhi = () => fixedPoint(x => 1 + 1 / x);

module.exports = { fixedPoint, getPhi };
