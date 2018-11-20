const compose = (...fns) => initialData =>
  fns.reduceRight((updatedData, fn) => fn(updatedData), initialData);
module.exports = compose;
