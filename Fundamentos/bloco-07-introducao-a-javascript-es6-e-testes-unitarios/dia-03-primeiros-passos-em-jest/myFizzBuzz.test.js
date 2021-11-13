const myFizzBuzz = require('./myFizzBuzz');

describe('função myFizzBuzz()', () => {

  test('caso a função recebeca o valor 15 retorne fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('caso a função recebeca o valor 9 retorne fizz', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  });

  test('caso a função recebeca o valor 10 retorne buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  test('caso a função recebeca o valor 7 retorne o próprio valor', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  test('caso a função recebeca um valor que não seja numérico retorne false', () => {
    expect(myFizzBuzz('number')).toEqual(false);
  });

});