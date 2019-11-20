/*
The idea of smoothing a function is an important concept in signal processing.
If f is a function and dx is some small number, then the smoothed version of f
is the function whose value at a point x is the average of f(x - dx), f(x), and
f(x + dx). Write a procedure smooth that takes as input a procedure that
computes f and returns a procedure that computes the smoothed f.

It is sometimes valuable to repeatedly smooth a function (that is, smooth the
smoothed function, and so on) to obtain the n-fold smoothed function. Show how
to generate the n-fold smoothed function of any given function using $smooth and
$repeated.
*/

const { curry, pipe } = require('../../utils');
const repeated = require('../1.43/1.43');

const average = (...args) =>
  args.reduce((accum, arg) => arg + accum, 0) / args.length;

const smooth = curry((fn, dx, x) => average(fn(x - dx), fn(x), fn(x + dx)));

const nFoldSmooth = (fn, dx, iterations, x) =>
  pipe(
    smoothedFn => repeated(smoothedFn, iterations),
    repeatedlySmoothedFn => repeatedlySmoothedFn(x)
  )(smooth(fn, dx));

module.exports = {
  nFoldSmooth: curry(nFoldSmooth),
  smooth
};
