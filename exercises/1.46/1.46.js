/*
Write a procedure iterativeImprove that takes two procedures as arguments: a
method for telling whether a guess is good enough and a method for improving a
guess. iterativeImprove should return as its value a procedure that takes a
guess as argument and keeps improving the guess until it is good enough.
Rewrite the sqrt procedure of Section 1.1.7 and the fixedPoint procedure of
Section 1.3.3 in terms of iterativeImprove.
*/
const { pipe, square } = require('../../utils');

const average = (x, y) => (x + y) / 2;
const precision = 0.001;

const isGoodEnough = (guess, x) => Math.abs(square(guess) - x) < precision;
const improve = (guess, x) => average(guess, x / guess);
const sqrtIter = (guess, x) =>
  isGoodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);

const sqrt = x => sqrtIter(1.0, x);

const iterativeImprove = (getIsGuessGoodEnough, getImprovedGuess) =>
  (function improveGuessUntilGoodEnough(guess = 1) {
    return getIsGuessGoodEnough(guess)
      ? guess
      : pipe(getImprovedGuess, improveGuessUntilGoodEnough)(guess);
  })();

const iterativeImproveSqRt = radicand =>
  iterativeImprove(
    guess => Math.abs(square(guess) - radicand) < precision,
    guess => average(guess, radicand / guess)
  );

const iterativeImproveFixedPoint = fn =>
  iterativeImprove(guess => Math.abs(fn(guess) - guess) < precision, fn);

module.exports = {
  iterativeImproveFixedPoint,
  iterativeImproveSqRt,
  precision,
  sqrt
};
