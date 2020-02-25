/**
 * 
 * Alyssa’s program is incomplete because she
has not specified the implementation of the interval ab-
straction. Here is a definition of the interval constructor:
(define (make-interval a b) (cons a b))
Define selectors upper-bound and lower-bound to complete
the implementation.
 */

/*
 Alyssa's program is incomplete because she has not specified the implementation
 of the interval abstraction. Here is a definition of the interval constructor:
 const makeInterval = (a, b) => cons(a, b);
 Define selectors upperBound and lowerBound to complete the implementation.
 */
const { car, cdr, cons } = require('../2.01/2.01');

const lowerBound = interval => car(interval);

const makeInterval = (a, b) => cons(Math.min(a, b), Math.max(a, b));

const upperBound = interval => cdr(interval);

module.exports = {
  lowerBound,
  makeInterval,
  upperBound
};
