/*
Show that $sum and $product are both special cases of a still
more general notion called $accumulate that combines a collection
of terms, using some general accumulation function
*/

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const inc = num => ++num;
const identity = x => x;

const accumulate = (
  updateTotalFn,
  updateMinFn,
  updateTermFn,
  startingTotal
) => (min, max) => {
  const fastAccumulate = (currMin, total) =>
    currMin > max
      ? total
      : fastAccumulate(
          updateMinFn(currMin),
          updateTotalFn(total, updateTermFn(currMin))
        );

  return fastAccumulate(min, startingTotal);
};

const product = accumulate(multiply, inc, identity, 1);
const sum = accumulate(add, inc, identity, 0);

module.exports = { product, sum };
