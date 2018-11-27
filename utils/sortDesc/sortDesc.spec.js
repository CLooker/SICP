const sortDesc = require('./sortDesc');

describe('sortDesc', () => {
  it('should sort arrays from highest to lowest', () => {
    expect(sortDesc([[345890, 890, 3456, 234]])).toEqual([
      345890,
      3456,
      890,
      234
    ]);
    expect(sortDesc([978, 234, 876, 89, 1234, 789])).toEqual([
      1234,
      978,
      876,
      789,
      234,
      89
    ]);
    expect(sortDesc([236445, 3523454, 343554, 223])).toEqual([
      3523454,
      343554,
      236445,
      223
    ]);
  });

  it('should sort integers passed in as arguments from highest to lowest', () => {
    expect(sortDesc(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toEqual([
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]);
    expect(sortDesc(5, 4, 6, 7, 3, 2, 9)).toEqual([9, 7, 6, 5, 4, 3, 2]);
    expect(sortDesc(1, 1, 1, 1, 1, 1, 1, 11, 1)).toEqual([
      11,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]);
  });
});
