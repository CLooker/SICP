const flat = require('../flat');
const sum = (...nums) => flat(nums).reduce((total, num) => total + num, 0);
module.exports = sum;
