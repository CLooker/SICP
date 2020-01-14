/* 
Define a better version of make-rat that handles both positive and negative
arguments. make-rat should normalize the sign so that if the rational number
is positive, both the numerator and denominator are positive, and if the 
rational number is negative, only the numerator is negative.
*/
const car = pair => pair[0];

const cdr = pair => pair[1];

const cons = (x, y) => [x, y];

const denom = rat => cdr(rat);

const getGreatestCommonDenominator = (a, b) =>
  b === 0 ? a : getGreatestCommonDenominator(b, a % b);

const getIsPositive = n => n >= 0;

const makeRat = (numerator, denominator) => {
  const greatestCommonDenominator = getGreatestCommonDenominator(
    numerator,
    denominator
  );

  const rat = cons(
    numerator / greatestCommonDenominator,
    denominator / greatestCommonDenominator
  );

  return normalizeRat(num(rat), denom(rat));
};

const normalizeRat = (numerator, denominator) => {
  const isPositive = (() => {
    const [isNumeratorPositive, isDenominatorPositive] = [
      numerator,
      denominator
    ].map(getIsPositive);

    return (
      (isNumeratorPositive && isDenominatorPositive) ||
      (!isNumeratorPositive && !isDenominatorPositive)
    );
  })();

  const absValueNumerator = Math.abs(numerator);
  const absValueDenominator = Math.abs(denominator);

  return isPositive
    ? cons(absValueNumerator, absValueDenominator)
    : cons(-absValueNumerator, absValueNumerator);
};

const num = rat => car(rat);

module.exports = { car, cdr, cons, getIsPositive, makeRat };
