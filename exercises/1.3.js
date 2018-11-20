/*
Define a procedure that takes three numbers as arguments
and returns the sum of the squares of the two larger numbers.
*/

const compose = require('../utils/compose');
const sortDesc = require('../utils/sortDesc');
const take = require('../utils/take');
const map = require('../utils/map');
const square = require('../utils/square');
const add = require('../utils/add');

const answer = nums =>
  compose(
    add,
    map(square),
    take(2),
    sortDesc
  )(nums);

module.exports = answer;
