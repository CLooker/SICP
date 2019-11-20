/*
Write a procedure that takes as inputs a procedure that computes f and a
positive integer n and returns the procedure that computes the nth repeated 
application of f.
repeated(square, 2, 5) should return 625
*/

const { curry } = require('../../utils');

const repeated = curry((fn, iterations, input) => {
  const fastRepeated = (ret, currIteration) =>
    currIteration === iterations ? ret : fastRepeated(fn(ret), ++currIteration);

  return fastRepeated(fn(input), 1);
});

module.exports = repeated;
