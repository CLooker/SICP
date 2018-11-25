/* 
A function f is defined by the rule that 
f(n) = n if n < 3 and
f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.
Write a procedure that computes f by means of a recursive process.
Write a procedure that computes f by means of an iterative process.
*/

const { add } = require('../../utils');

const fRec = num =>
  num < 3 ? num : add(fRec(num - 1), 2 * fRec(num - 2), 3 * fRec(num - 3));

const fIter = num => {
  const fastFIter = (a, b, c, currNum) =>
    currNum === 0 ? a : fastFIter(b, c, add(c, 2 * b, 3 * a), currNum - 1);
  return fastFIter(0, 1, 2, num);
};

module.exports = { fRec, fIter };
