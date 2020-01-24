/*
Show that we can represent pairs of non-negative integers using only numbers and
arithmetic operations if we represent the pair a and b as the integer that is
the product of 2^a * 3^b. Give the corresponding definitions of the procedures
cons, car, and cdr.
*/
const { isDivisible } = require('../../utils');

const getBase = (n, power, acc = 0) =>
  isDivisible(n, power) ? getBase(n / power, power, acc + 1) : acc;

const car = n => getBase(n, 2);

const cdr = n => getBase(n, 3);

const cons = (a, b) => Math.pow(2, a) * Math.pow(3, b);

module.exports = { car, cdr, cons };
