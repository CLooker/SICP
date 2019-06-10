const approximateE = require('./1.38');
it('approximates e', () => {
  const actual = Math.E;

  const expected = approximateE(4);

  const isApproximate = Math.abs(actual - expected) < 0.01;

  expect(isApproximate).toBeTruthy();
});
