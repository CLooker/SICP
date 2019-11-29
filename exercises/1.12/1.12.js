/*
Write a procedure that computes elements of Pascal's triangle by means of a
recursive process. The numbers at the edge of the triangle are all 1, and each
number inside the triangle is the sum of the two numbers above it.
*/
const pascalsTriangle = width => {
  const height = width / 2;

  const rows = (function getRows(
    currRows = [
      Array.from({ length: width }, (_, i) => (i === width / 2 - 1 ? 1 : ''))
    ]
  ) {
    if (currRows.length === height) return currRows;

    const lastRow = currRows[currRows.length - 1];

    const nextRow = (function getNextRow(currNextRow = []) {
      if (currNextRow.length === width) return currNextRow;

      const currNextRowItem =
        [lastRow[currNextRow.length - 1], lastRow[currNextRow.length + 1]]
          .filter(Number.isInteger)
          .reduce((accum, item) => accum + item, 0) || '';

      return getNextRow(currNextRow.concat(currNextRowItem));
    })();

    return getRows([...currRows, nextRow]);
  })();

  return rows;
};

module.exports = pascalsTriangle;
