const pipe = (...fns) => initialData =>
  fns.reduce((updatedData, fn) => fn(updatedData), initialData);

module.exports = pipe;
