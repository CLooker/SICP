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

module.exports = getInts;
