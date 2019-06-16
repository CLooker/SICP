const { getInts } = require('../../utils');
const tanCf = require('./1.39');

describe('tanCf', () => {
  // because JS is bad at numbers
  const angleDegreesToAnswer = { 90: Infinity, 270: 14148475504056880 };

  const angleDegreesArr = getInts(0, 360);

  angleDegreesArr.forEach(angleDegrees => {
    it(`computes an approximation to the tangent fn for ${angleDegrees} based on Lambert's formula`, () => {
      const angleRadians = angleDegrees * (Math.PI / 180);

      const actual =
        angleDegrees in angleDegreesToAnswer
          ? angleDegreesToAnswer[angleDegrees]
          : Math.tan(angleRadians);

      const expected = tanCf(angleRadians, 20);

      // Math.abs(Infinity - Infinity) < x is false
      const isApproximate =
        actual === expected || Math.abs(actual - expected) < 0.000000000001;

      if (!isApproximate) console.log(angleDegrees, actual, expected);

      expect(isApproximate).toBeTruthy();
    });
  });
});
