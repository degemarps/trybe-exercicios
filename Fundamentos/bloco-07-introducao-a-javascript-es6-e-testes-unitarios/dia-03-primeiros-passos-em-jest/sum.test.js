const sum = require('./sum');

describe('função sum()', () => {

  test('caso os parâmetros forem (4, 5) retorna 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('caso os parâmetros forem (0, 0) retorna 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('caso os parâmetros forem (4, "5") retorna Error', () => {
    expect(() => { sum(4, '5'); }).toThrow('parameters must be numbers');
  });
});
