/* 
A function f is defined by the rule that 
f(n) = n if n < 3 and
f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.
Write a procedure that computes f by means of a recursive process.
Write a procedure that computes f by means of an iterative process.
*/

const { add } = require('../../utils');

const fRec = n =>
  n < 3 ? n : add(fRec(n - 1), 2 * fRec(n - 2), 3 * fRec(n - 3));

/* 
Because v8 and node don't currently worry about TCO,
I don't think this actually is run iteratively under the hood.
Nonetheless, the solution is representative of the spirit of the book.
*/
const fIter = n => {
  const fastFIter = (a, b, c, currN) =>
    currN === 0 ? a : fastFIter(b, c, add(c, 2 * b, 3 * a), currN - 1);
  return fastFIter(0, 1, 2, n);
};

module.exports = { fRec, fIter };
