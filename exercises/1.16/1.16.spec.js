const expt = require('./1.16');
const { getInts } = require('../../utils');

describe('expt', () => {
  const bases = getInts(0, 10);
  const powers = bases;

  bases.forEach(base => {
    powers.forEach(power => {
      it('should calculate the correct value', () => {
        const actual = expt(base, power);
        const expected = Math.pow(base, power);
        expect(actual).toBe(expected);
      });
    });
  });
});
