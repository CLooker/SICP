/*
Define a procedure that takes three integers as arguments
and returns the sum of the squares of the two larger integers.
*/
const { compose, sortDesc, take, map, square, add } = require('../../utils');

const answer = (...ints) =>
  compose(
    add,
    map(square),
    take(2),
    sortDesc
  )(ints);

module.exports = answer;
