/*
Write a procedure that computes elements of Pascal's triangle by means of a
recursive process. The numbers at the edge of the triangle are all 1, and each
number inside the triangle is the sum of the two numbers above it.
*/

const pascalsTriangle = width => {
  const height = width / 2;

  let ret = [];

  for (let i = 1; i <= height; i++) {
    let row = [];

    const itemIndices = (() => {
      const base = width / 2;

      const first = base - i + 1;

      let indices = [first];

      while (indices.length < i) {
        const last = indices[indices.length - 1];
        indices.push(last + 2);
      }

      return indices;
    })();

    for (let j = 1; j <= width; j++) {
      if (itemIndices.includes(j)) {
        if (i === 1) {
          row.push(1);
        } else {
          // check these exist
          let numsToSum = [ret[i - 1][j - 1], ret[i - 1][j + 1]];
          let sum;
          row.push(sum);
        }
      } else {
        row.push('');
      }
    }

    ret.push(row);
    console.log('ret: ' + JSON.stringify(ret, null, 2));
  }

  return ret;
};

module.exports = pascalsTriangle;
