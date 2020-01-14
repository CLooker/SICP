const { makePoint, makeSegment, midPointSegment } = require('./2.02');

describe('midPointSegment', () => {
  it('returns the midpoint segment', () => {
    [
      {
        pointA: makePoint(0, 0),
        pointB: makePoint(0, 10),
        getSegment: (pointA, pointB) => makeSegment(pointA, pointB),
        getActual: segment => midPointSegment(segment),
        expected: [0, 5]
      },
      {
        pointA: makePoint(50, 100),
        pointB: makePoint(-100, 200),
        getSegment: (pointA, pointB) => makeSegment(pointA, pointB),
        getActual: segment => midPointSegment(segment),
        expected: [-25, 150]
      },
      {
        pointA: makePoint(250, 2),
        pointB: makePoint(750, 10),
        getSegment: (pointA, pointB) => makeSegment(pointA, pointB),
        getActual: segment => midPointSegment(segment),
        expected: [500, 6]
      }
    ].forEach(({ pointA, pointB, getSegment, getActual, expected }) => {
      const segment = getSegment(pointA, pointB);
      const actual = getActual(segment);
      expect(actual).toEqual(expected);
    });
  });
});
