const compose = (...fns) => initialData =>
  fns.reduceRight((updatedData, fn) => fn(updatedData), initialData);

const curry = fn => (...args) =>
  args.length >= fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const flat = items =>
  items.reduce(
    (flattened, item) =>
      Array.isArray(item)
        ? [...flattened, ...flat(item)]
        : [...flattened, item],
    []
  );

const getInts = (start, end) => {
  // allows user to say `getInts(5)`
  // and receive [1,2,3,4,5]
  if (end === undefined) {
    end = start;
    start = 1;
  }
  let ints = [];
  for (let int = start; ints.length <= Math.abs(start - end); )
    ints.push(start < end ? int++ : int--);
  return ints;
};

const isDivisible = (numerator, denominator) => numerator % denominator === 0;

const isEven = (...ints) => flat(ints).every(int => int % 2 === 0);

const map = fn => arr => arr.map(fn);

const pipe = (...fns) => initialData =>
  fns.reduce((updatedData, fn) => fn(updatedData), initialData);

const sortAsc = (...nums) => flat(nums).sort((a, b) => a - b);

const sortDesc = (...nums) => flat(nums).sort((a, b) => b - a);

const square = num => num * num;

const sum = (...nums) => flat(nums).reduce((total, num) => total + num, 0);

const take = size => arr => arr.slice(0, size);

module.exports = {
  compose,
  curry,
  flat,
  getInts,
  isDivisible,
  isEven,
  map,
  pipe,
  sortAsc,
  sortDesc,
  square,
  sum,
  take
};
