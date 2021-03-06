/*
Define a procedure that takes three numbers as arguments
and returns the sum of the squares of the two larger numbers.
*/
const { compose, sortDesc, take, map, square, sum } = require('../../utils');

const answer = (...nums) =>
  compose(
    sum,
    map(square),
    take(2),
    sortDesc
  )(nums);

module.exports = answer;
