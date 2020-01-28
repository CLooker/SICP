/*
Define one and two directly (not in terms of zero and add-
1 ). (Hint: Use substitution to evaluate (add-1 zero) ). Give
a direct definition of the addition procedure + (not in terms
of repeated application of add-1 ).

Define one and two directly (not in terms of zero and add-1). Hint: Use
substitution to evaluate add1(zero). Give a direct definition of the addition
procedure + (not in terms of repeated application of add-1)
*/
const { curry, pipe } = require('../../utils');

const add = curry((getUpdateInputFn, getUpdateInputFn2, fn, input) =>
  pipe(getUpdateInputFn(fn), getUpdateInputFn2(fn))(input)
);

const one = fn => x => fn(x);

const two = fn => x => pipe(fn, fn)(x);

module.exports = { add, one, two };
