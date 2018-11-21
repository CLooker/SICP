const take = require('./take');

describe('take', () => {
  const nums = [234890, 890, 234, 789, 234453, 12, 89023];
  const sizes = [1, 2, 3, 4, 5, 6, 7];

  sizes.forEach(size => {
    it('should take the correct portion of the array', () => {
      const actual = take(size)(nums);

      const expected = [];
      let sizeTaken = () => expected.length;
      for (let i = 0; i < nums.length && sizeTaken() < size; i++)
        expected.push(nums[i]);

      expect(actual).toEqual(expected);
    });
  });
});
