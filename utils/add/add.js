const flat = require('../flat');
const add = (...nums) => flat(nums).reduce((total, num) => total + num, 0);
module.exports = add;
