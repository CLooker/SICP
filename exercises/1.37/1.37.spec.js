const { contFrac, contFracIter } = require('./1.37');
const { getPhi } = require('../1.35/1.35');
const { curry, pipe } = require('../../utils');

const toFixedNum = (placesAfterDecimal, num) =>
  pipe(
    _ => num.toFixed(placesAfterDecimal),
    str => +str
  )();

describe('contFrac', () => {
  it('approximates a continued fraction', () => {
    const actual = pipe(
      _ => contFrac(n => 1, n => 1, 12),
      curry(toFixedNum)(4)
    )();

    const expected = pipe(
      getPhi,
      phi => 1 / phi,
      curry(toFixedNum)(4)
    )();

    expect(actual).toBe(expected);
  });
});

describe('contFracIter', () => {
  it('approximates a continued fraction', () => {
    const actual = pipe(
      _ => contFracIter(n => 1, n => 1, 12),
      curry(toFixedNum)(4)
    )();

    const expected = pipe(
      getPhi,
      phi => 1 / phi,
      curry(toFixedNum)(4)
    )();

    expect(actual).toBe(expected);
  });
});
