const { contFrac } = require('../1.37/1.37');

const tanCf = (angleRadians, maxCalculations) => {
  const getNumerator = i =>
    i === 1 ? angleRadians : -(angleRadians * angleRadians);

  const getDenominator = i => 2 * i - 1;

  return contFrac(getNumerator, getDenominator, maxCalculations);
};

module.exports = tanCf;
