/*
Consider the problem of representing line segments in a plane. Each segment is
represented as a pair of points: a starting point and an ending point. Define a
constructor make-segment and selectors start-segment and end-segment that define
the representation of segments in terms of points. Furthermore, a point can be
represented as a pair of numbers: the x coordinate and the y coordinate.
Accordingly, specify a constructor make-point and selectors x-point and y-point
that define this representation. Finally, using your selectors and constructors,
define a procedure midpoint-segment that takes a line segment as argument and
returns its midpoint (the point whose coordinates are the average of the
  coordinates of the endpoints).
*/
const { car, cdr, cons } = require('../2.01/2.01');
const { map, pipe } = require('../../utils');

const average = items =>
  items.reduce((accum, item) => accum + item, 0) / items.length;

const makeSegment = (pointA, pointB) => cons(pointA, pointB);

const startSegment = segment => car(segment);

const endSegment = segment => cdr(segment);

const makePoint = (x, y) => cons(x, y);

const xPoint = point => car(point);

const yPoint = point => cdr(point);

const midPointSegment = segment =>
  makePoint(
    pipe(map(xPoint), average)(segment),
    pipe(map(yPoint), average)(segment)
  );

module.exports = { makePoint, makeSegment, midPointSegment };
