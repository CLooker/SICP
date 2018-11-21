const flat = coll => {
  let flattened = [];
  for (let item of coll)
    !Array.isArray(item) ? flattened.push(item) : flattened.push(...flat(item));
  return flattened;
};

module.exports = flat;
