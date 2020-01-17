/*
Implement a representation for rectangles in a plane. In terms of your
constructors and selectors, create procedures that compute the perimeter and
the area of a given rectangle. Now implement a different representation for
rectangles. Can you design your system with suitable abstraction barriers, so
that the same perimeter and area procedures will work using either
representation?
*/

// TODO
// not sure I grasp the different representation part of the question yet
// if I figure it out, I'll come back and do that part

const { makeSegment, xPoint, yPoint } = require('../2.02/2.02');
const { curry } = require('../../utils');

const area = rect => {
  const h = height(rect);
  const w = width(rect);
  return h * w;
};

const trandsduce = curry((updateItemFn, updateAccumFn, startingValue, arr) =>
  arr.reduce((accum, item) => {
    const updatedItem = updateItemFn(item);
    return updateAccumFn(accum, updatedItem);
  }, startingValue)
);

const pointsToMinX = trandsduce(xPoint, Math.min, Infinity);

const pointsToMaxX = trandsduce(xPoint, Math.max, -Infinity);

const pointsToMinY = trandsduce(yPoint, Math.min, Infinity);

const pointsToMaxY = trandsduce(yPoint, Math.max, -Infinity);

const height = rect => {
  const rectPoints = rect.reduce((accum, points) => {
    accum.push(...points);
    return accum;
  }, []);

  return pointsToMaxY(rectPoints) - pointsToMinY(rectPoints);
};

const makeRect = (...points) => {
  if (points.length !== 4) {
    throw new Error('makeRect requires 4 points!');
  }

  if (points.some(point => point.length !== 2)) {
    throw new Error('makeRect requires each point to have 2 values!');
  }

  const [minX, maxX, minY, maxY] = [
    pointsToMinX,
    pointsToMaxX,
    pointsToMinY,
    pointsToMaxY
  ].map(fn => fn(points));

  const rectPoints = [
    [minX, minY],
    [minX, maxY],
    [maxX, maxY],
    [maxX, minY]
  ];

  return rectPoints.map((rectPoint, i) => {
    const nextRectPoint =
      i === rectPoints.length - 1 ? rectPoints[0] : rectPoints[i + 1];

    return makeSegment(rectPoint, nextRectPoint);
  });
};

const perimeter = rect => {
  const h = height(rect);
  const w = width(rect);
  return [h, w].map(n => n * 2).reduce((accum, n) => accum + n, 0);
};

const width = rect => {
  const rectPoints = rect.reduce((accum, points) => {
    accum.push(...points);
    return accum;
  }, []);

  return pointsToMaxX(rectPoints) - pointsToMinX(rectPoints);
};

module.exports = { area, makeRect, perimeter };
