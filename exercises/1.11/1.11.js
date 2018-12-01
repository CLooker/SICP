/* 
A function f is defined by the rule that 
f(n) = n if n < 3 and
f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.
Write a procedure that computes f by means of a recursive process.
Write a procedure that computes f by means of an iterative process.
*/

const { sum } = require('../../utils');

const fRec = int =>
  int < 3 ? int : sum(fRec(int - 1), 2 * fRec(int - 2), 3 * fRec(int - 3));

const fIter = int => {
  const fastFIter = (a, b, c, currInt) =>
    currInt === 0 ? a : fastFIter(b, c, sum(c, 2 * b, 3 * a), currInt - 1);
  return fastFIter(0, 1, 2, int);
};

module.exports = { fRec, fIter };
