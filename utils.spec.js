const npmInts = require('nums');
const {
  compose,
  curry,
  flat,
  getInts,
  isDivisible,
  isEven,
  map,
  pipe,
  sortAsc,
  sortDesc,
  square,
  sum,
  take
} = require('./utils');

describe('curry', () => {
  const fn = (a, b, c, d) => a + b + c + d;

  it('does not call the fn if not enough args are given', () => {
    const curried = curry(fn);

    curried(1);

    const actual = typeof curried;

    const expected = 'function';

    expect(actual).toBe(expected);
  });

  it('calls the fn if enough args are given', () => {
    const curried = curry(fn);

    const actual = curried(1, 1, 1, 1);

    const expected = 4;

    expect(actual).toBe(expected);
  });
});

describe('compose', () => {
  it('should combine simple functions to transform data correctly', () => {
    const add = a => b => a + b;
    const addOne = add(1);
    const addTen = add(10);
    const addFifty = add(50);

    const startingValue = 0;

    const actual = compose(addFifty, addOne, addTen)(startingValue);
    const expected = 61;
    expect(actual).toBe(expected);
  });
});

describe('flat', () => {
  it('should flatten arrays fully', () => {
    expect(flat([1, [2, [3, [[4]]]], 5, [[[[[[[6]]]]]]]])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6
    ]);
  });
});

describe('getInts', () => {
  it('should get the ints you asked for', () => {
    expect(getInts(5)).toEqual(npmInts(5));
    expect(getInts(5, 10)).toEqual(npmInts(5, 10));
    expect(getInts(3, -2)).toEqual(npmInts(3, -2));
    expect(getInts(-7, 0)).toEqual(npmInts(-7, 0));
  });
});

describe('isDivisible', () => {
  const ints = getInts(-50, 50);
  const otherInts = getInts(5555, 5560);

  ints.forEach(int => {
    otherInts.forEach(otherInt => {
      it('should compute divisibility correctly', () => {
        const actual = isDivisible(int, otherInt);
        const expected = int % otherInt === 0;
        expect(actual).toBe(expected);
      });
    });
  });
});

describe('isEven', () => {
  const ints = getInts(100, 65);

  ints.forEach(int => {
    it('should calculate if a integer is even', () => {
      const actual = isEven(int);
      const expected = int % 2 === 0;
      expect(actual).toBe(expected);
    });
  });
});

describe('map', () => {
  it('should map', () => {
    const add = a => b => a + b;
    const addTen = add(10);
    const ints = getInts(10);
    const actual = map(addTen)(ints);
    const expected = ints.map(addTen);
    expect(actual).toEqual(expected);
  });
});

describe('pipe', () => {
  it('should combine simple functions to transform data correctly', () => {
    const add = a => b => a + b;
    const addOne = add(1);
    const addTen = add(10);
    const addFifty = add(50);

    const startingValue = 0;

    const actual = pipe(addFifty, addOne, addTen)(startingValue);

    const expected = 61;

    expect(actual).toBe(expected);
  });
});

describe('sortAsc', () => {
  it('should sort arrays from lowest to highest', () => {
    expect(sortAsc([[345890, 890, 3456, 234]])).toEqual([
      234,
      890,
      3456,
      345890
    ]);
    expect(sortAsc([978, 234, 876, 89, 1234, 789])).toEqual([
      89,
      234,
      789,
      876,
      978,
      1234
    ]);
    expect(sortAsc([236445, 3523454, 343554, 223])).toEqual([
      223,
      236445,
      343554,
      3523454
    ]);
  });

  it('should sort integers passed in as arguments from lowest to highest', () => {
    expect(sortAsc(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
    expect(sortAsc(5, 4, 6, 7, 3, 2, 9)).toEqual([2, 3, 4, 5, 6, 7, 9]);
    expect(sortAsc(1, 1, 1, 1, 1, 1, 1, 11, 1)).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      11
    ]);
  });
});

describe('sortDesc', () => {
  it('should sort arrays from highest to lowest', () => {
    expect(sortDesc([[345890, 890, 3456, 234]])).toEqual([
      345890,
      3456,
      890,
      234
    ]);
    expect(sortDesc([978, 234, 876, 89, 1234, 789])).toEqual([
      1234,
      978,
      876,
      789,
      234,
      89
    ]);
    expect(sortDesc([236445, 3523454, 343554, 223])).toEqual([
      3523454,
      343554,
      236445,
      223
    ]);
  });

  it('should sort integers passed in as arguments from highest to lowest', () => {
    expect(sortDesc(10, 9, 8, 7, 6, 5, 4, 3, 2, 1)).toEqual([
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]);
    expect(sortDesc(5, 4, 6, 7, 3, 2, 9)).toEqual([9, 7, 6, 5, 4, 3, 2]);
    expect(sortDesc(1, 1, 1, 1, 1, 1, 1, 11, 1)).toEqual([
      11,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]);
  });
});

describe('square', () => {
  const ints = [4536, 456, 2345, 2325344, 234, 1345890, 234890];
  ints.forEach(int => {
    const actual = square(int);
    const expected = Math.pow(int, 2);
    it('should square integers correctly', () => {
      expect(actual).toBe(expected);
    });
  });
});

describe('sum', () => {
  const numsColls = [
    [237894, 345690, 234, 90234, 23459],
    [2348, 234908, 234890, 2347, 890],
    [2, 23904, 90, 2, 456, 23],
    [890, 64, 4786, 123, 4786]
  ];

  numsColls.forEach(nums => {
    it('should sum the integers in arrays up', () => {
      const actual = sum(nums);
      const expected = nums.reduce((total, num) => total + num, 0);
      expect(actual).toBe(expected);
    });
  });

  it('should sum up integer arguments', () => {
    expect(sum(1, 2, 3, 4, 5, 6)).toBe(21);
    expect(sum(10, 20, 30, 40, 50)).toBe(150);
    expect(sum(500, 500, 500, 500)).toBe(2000);
  });
});

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
