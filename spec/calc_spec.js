require './assets/js/calc.js'

describe('fizz_buzz', function(){

  it('returns 1 if number is 1', function(){
    expect(calc.normal_number(1).toEqual(1)
  });

  it('returns fizz if number is divisible by 3', function() {
    expect(calc.fizz(3)).toEqual('fizz')
  });

  it('returns buzz if number is divisible by 5', function() {
    expect(calc.buzz(5)).toEqual('buzz')
  });

  it('returns fizz buzz if number is divisible by 15', function() {
    expect(calc.fizz(15)).toEqual('fizz buzz')
  });
});
