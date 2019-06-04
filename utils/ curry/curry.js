const curry = fn => (...args) =>
  args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

module.exports = curry;
