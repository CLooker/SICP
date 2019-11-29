const pascalsTriangle = require('./1.12');

describe('pascalsTriangle', () => {
  it(`returns Pascal's triangle`, () => {
    const actual = pascalsTriangle(10);
    const expected = [
      ['', '', '', '', 1, '', '', '', '', ''],
      ['', '', '', 1, '', 1, '', '', '', ''],
      ['', '', 1, '', 2, '', 1, '', '', ''],
      ['', 1, '', 3, '', 3, '', 1, '', ''],
      [1, '', 4, '', 6, '', 4, '', 1, '']
    ];
    expect(actual).toEqual(expected);
  });
});
