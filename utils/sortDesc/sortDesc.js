const flat = require('../flat');
const sortDesc = (...nums) => flat(nums).sort((a, b) => b - a);
module.exports = sortDesc;
