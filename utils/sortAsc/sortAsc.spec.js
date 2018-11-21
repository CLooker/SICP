const sortAsc = require('./sortAsc');

describe('sortAsc', () => {
  it('should sort arrays from lowest to highest', () => {
    expect(sortAsc([[345890, 890, 3456, 234]])).toEqual([
      234,
      890,
      3456,
      345890
    ]);
    expect(sortAsc([978, 234, 876, 89, 1234, 789])).toEqual([
      89,
      234,
      789,
      876,
      978,
      1234
    ]);
    expect(sortAsc([236445, 3523454, 343554, 223])).toEqual([
      223,
      236445,
      343554,
      3523454
    ]);
  });

  it('should sort numbers passed in as arguments from lowest to highest', () => {
    expect(sortAsc(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
    expect(sortAsc(5, 4, 6, 7, 3, 2, 9)).toEqual([2, 3, 4, 5, 6, 7, 9]);
    expect(sortAsc(1, 1, 1, 1, 1, 1, 1, 11, 1)).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      11
    ]);
  });
});
