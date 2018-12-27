/*
Show that $sum and $product are both special cases of a still
more general notion called $accumulate that combines a collection
of terms, using some general accumulation function
*/

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const inc = num => ++num;
const identity = x => x;

// this captures SICP spirit better
// but v8 doesn't care about TCO
// so this causes stack overflow
const accumulateSICP = (updateTotalFn, updateMinFn, updateTermFn) => (
  min,
  max,
  startingTotal
) => {
  const fastAccumulate = (currMin, total) =>
    min > max
      ? total
      : fastAccumulate(
          updateMinFn(currMin),
          updateTotalFn(total, updateTermFn(currMin))
        );

  return fastAccumulate(min, startingTotal);
};

// unsexy but gets it done
const accumulate = (
  updateTotalFn,
  updateMinFn,
  updateTermFn,
  startingTotal
) => (min, max) => {
  let total = startingTotal;
  for (let currMin = min; currMin <= max; currMin = updateMinFn(currMin))
    total = updateTotalFn(total, updateTermFn(currMin));
  return total;
};

const product = accumulate(multiply, inc, identity, 1);
const sum = accumulate(add, inc, identity, 0);

module.exports = { product, sum };
