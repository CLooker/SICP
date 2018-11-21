const map = require('./map');

describe('map', () => {
  it('should map', () => {
    const add = a => b => a + b;
    const addTen = add(10);
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = map(addTen)(nums);
    const expected = nums.map(addTen);
    expect(actual).toEqual(expected);
  });
});
