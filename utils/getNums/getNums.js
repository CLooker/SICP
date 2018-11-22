const getNums = (start, end) => {
  let nums = [];
  if (end === undefined) {
    end = start;
    start = 1;
  }
  for (let num = start; nums.length <= Math.abs(start - end); ) {
    nums.push(num);
    start < end ? num++ : num--;
  }
  return nums;
};

module.exports = getNums;
