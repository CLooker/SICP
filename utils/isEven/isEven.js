const flat = require('../flat');
const isEven = (...nums) => flat(nums).every(num => num % 2 === 0);

module.exports = isEven;
