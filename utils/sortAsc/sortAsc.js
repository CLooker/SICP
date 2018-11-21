const flat = require('../flat');
const sortAsc = (...nums) => flat(nums).sort((a, b) => a - b);

module.exports = sortAsc;
