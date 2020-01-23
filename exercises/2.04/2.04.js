/*
Here is an alternative representation of pairs. For this representation, verify
that car(cons(x, y)) yields x for any objects x and y. What is the corresponding
definition of cdr?
*/

const car = fn => fn((p, q) => p);

const cdr = fn => fn((p, q) => q);

const cons = (x, y) => fn => fn(x, y);

module.exports = { car, cdr, cons };
