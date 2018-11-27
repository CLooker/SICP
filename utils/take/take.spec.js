const take = require('./take');

describe('take', () => {
  const ints = [234890, 890, 234, 789, 234453, 12, 89023];
  const sizes = [1, 2, 3, 4, 5, 6, 7];

  sizes.forEach(size => {
    it('should take the correct portion of the array', () => {
      const actual = take(size)(ints);

      const expected = [];
      let sizeTaken = () => expected.length;
      for (let i = 0; i < ints.length && sizeTaken() < size; i++)
        expected.push(ints[i]);

      expect(actual).toEqual(expected);
    });
  });
});
