const flat = require('../flat');
const isEven = (...ints) => flat(ints).every(int => int % 2 === 0);

module.exports = isEven;
