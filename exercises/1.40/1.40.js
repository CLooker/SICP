/*
Define a procedure $cubic that can be used together with the
$newtonsMethod procedure in expressions of the form
newtonsMethod(
    cubic(a, b, c),
    1
)
to approximate zeros of the cubic x^3 + ax^2 + bx + c
*/
const { curry } = require('../../utils');
const { fixedPoint } = require('../1.35/1.35');

const average = (...args) =>
  args.reduce((accum, arg) => arg + accum, 0) / args.length;

const averageDamp = curry((fn, x) => average(x, fn(x)));

const deriv = curry((fn, x) => (fn(x + 0.00001) - fn(x)) / 0.00001);

const newtonTransform = fn => x => x - fn(x) / deriv(fn, x);

const newtonsMethod = (fn, guess) => fixedPoint(newtonTransform(fn, guess));

const cubic = curry((a, b, c, x) => x * x * x + a * (x * x) + b * x + c);

module.exports = {
  averageDamp,
  cubic,
  deriv,
  newtonsMethod
};
