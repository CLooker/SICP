const { area, makeRect, perimeter } = require('./2.03');

describe('2.03', () => {
  const points = [
    [0, 0],
    [0, 10],
    [10, 10],
    [10, 0]
  ];
  const rect = makeRect(...points);

  it('computes perimeter', () => {
    const actual = perimeter(rect);
    const expected = 40;
    expect(actual).toBe(expected);
  });

  it('computes area', () => {
    const actual = area(rect);
    const expected = 100;
    expect(actual).toBe(expected);
  });
});
