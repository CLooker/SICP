const { lowerBound, makeInterval, upperBound } = require('../2.07/2.07');
const { subInterval } = require('../2.08/2.08');
const { width } = require('./2.09');

const addInterval = (intervalA, intervalB) => {
  const lowerInterval = makeInterval(
    lowerBound(intervalA),
    lowerBound(intervalB)
  );

  const upperInterval = makeInterval(
    upperBound(intervalA),
    upperBound(intervalB)
  );

  return makeInterval(
    upperBound(lowerInterval) + lowerBound(lowerInterval),
    upperBound(upperInterval) + lowerBound(upperInterval)
  );
};

const multInterval = (intervalA, intervalB) => {
  const [lowerBoundA, lowerBoundB] = [intervalA, intervalB].map(lowerBound);
  const [upperBoundA, upperBoundB] = [intervalA, intervalB].map(upperBound);
  const products = [
    lowerBoundA * lowerBoundB,
    lowerBoundA * upperBoundB,
    upperBoundA * lowerBoundB,
    upperBoundA * upperBoundB
  ];
  const [min, max] = [Math.min, Math.max].map(fn => fn(...products));
  return makeInterval(min, max);
};

const divInterval = (intervalA, intervalB) =>
  multInterval(
    intervalA,
    makeInterval(1 / upperBound(intervalB), 1 / lowerBound(intervalB))
  );

describe('width', () => {
  const [intervalA, intervalB] = [
    [0, 10],
    [10, 20]
  ].map(coords => makeInterval(...coords));

  const widths = [intervalA, intervalB].map(width).sort();

  test(`width of addInterval operation result is fn of width of addInterval arguments`, () => {
    const widthSum = widths.reduce((accum, w) => accum + w, 0);
    const intervalSum = addInterval(intervalA, intervalB);
    const widthOfIntervalSum = width(intervalSum);
    expect(widthSum).toBe(widthOfIntervalSum);
  });

  test(`width of subInterval operation result is fn of width of subInterval arguments`, () => {
    const widthDifference = widths.reduce((accum, w) => accum - w);
    const intervalDifference = subInterval(intervalA, intervalB);
    const widthOfIntervalDifference = width(intervalDifference);
    expect(widthDifference).toBe(widthOfIntervalDifference);
  });

  test(`width of multInterval operation result is not fn of width of multInterval arguments`, () => {
    const widthProduct = widths.reduce((accum, w) => accum * w, 1);
    const intervalProduct = multInterval(intervalA, intervalB);
    const widthOfIntervalProduct = width(intervalProduct);
    expect(widthProduct === widthOfIntervalProduct).toBeFalsy();
  });

  test(`width of divInterval operation result is not fn of width of divInterval arguments`, () => {
    const widthQuotient = widths.every(w => w)
      ? widths.reduce((accum, w) => w / accum, 1)
      : 0;
    const intervalQuotient = divInterval(intervalA, intervalB);
    const widthOfIntervalQuotient = width(intervalQuotient);
    expect(widthQuotient === widthOfIntervalQuotient).toBeFalsy();
  });
});
