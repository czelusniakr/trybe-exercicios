const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzBuzz', () => {
  it('verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('a')).toBe(false);
  });
});