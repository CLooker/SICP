const getNums = (start, end) => {
  // allows user to say `getNums(5)`
  // and receive [1,2,3,4,5]
  if (end === undefined) {
    end = start;
    start = 1;
  }
  let nums = [];
  for (let num = start; nums.length <= Math.abs(start - end); )
    nums.push(start < end ? num++ : num--);
  return nums;
};

module.exports = getNums;
