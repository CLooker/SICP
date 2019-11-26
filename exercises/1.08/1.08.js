/*
Newton's method for cube roots is based on the fact that if y is an 
approximation to the cube root of x, then a better approximation is given by the
value (x / y^2 + 2y) / 3. Use this formula to implement a cube-root procedure
analagous to the square-root procedure.
*/
const cube = x => x * x * x;
const precision = 0.0001;

const isGoodEnough = (guess, radicand) =>
  Math.abs(cube(guess) - radicand) < precision;

const improve = (guess, radicand) =>
  (radicand / (guess * guess) + 2 * guess) / 3;

const cubeRootIter = (guess, radicand) =>
  isGoodEnough(guess, radicand)
    ? guess
    : cubeRootIter(improve(guess, radicand), radicand);

const cubeRoot = radicand => cubeRootIter(1.0, radicand);

module.exports = { cubeRoot, precision };
