const flat = require('./flat');

describe('flat', () => {
  it('should flatten arrays fully', () => {
    expect(flat([1, [2, [3, [[4]]]], 5, [[[[[[[6]]]]]]]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6
    ]);
  });
});
