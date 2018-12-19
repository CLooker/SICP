const flat = items =>
  items.reduce(
    (flattened, item) =>
      Array.isArray(item)
        ? [...flattened, ...flat(item)]
        : [...flattened, item],
    []
  );

module.exports = flat;
