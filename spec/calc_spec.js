describe('Calc', function(){

  it('returns 1 if number is 1', function(){
    var c = new Calc;
    expect(c.fizzbuzz(1)).toEqual(1);
  });

  it('returns fizz if number is divisible by 3', function() {
    var c = new Calc;
    expect(c.fizzbuzz(3)).toEqual('fizz')
  });
  //
  // it('returns buzz if number is divisible by 5', function() {
  //   expect(calc.buzz(5)).toEqual('buzz')
  // });
  //
  // it('returns fizz buzz if number is divisible by 15', function() {
  //   expect(calc.fizz(15)).toEqual('fizz buzz')
  // });
});
