/*
Using reasoning analagous to Alyssa's, describe how the difference of two
intervals may be computed. Define a corresponding subtraction procedure, called
subInterval.
*/
const { lowerBound, makeInterval, upperBound } = require('../2.07/2.07');

const subInterval = (intervalA, intervalB) => {
  const lowerInterval = makeInterval(
    lowerBound(intervalA),
    lowerBound(intervalB)
  );

  const upperInterval = makeInterval(
    upperBound(intervalA),
    upperBound(intervalB)
  );

  return makeInterval(
    upperBound(lowerInterval) - lowerBound(lowerInterval),
    upperBound(upperInterval) - lowerBound(upperInterval)
  );
};

module.exports = { subInterval };
