const flat = items => {
  let flattened = [];
  for (let item of items)
    !Array.isArray(item) ? flattened.push(item) : flattened.push(...flat(item));
  return flattened;
};

module.exports = flat;
