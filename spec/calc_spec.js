describe('Calc', function(){

  it('returns 1 if number is 1', function(){
    var c = new Calc;
    expect(c.fizzbuzz(1)).toEqual(1);
  });

  it('returns fizz if number is divisible by 3', function() {
    var c = new Calc;
    expect(c.fizzbuzz(3)).toEqual('fizz')
  });

  it('returns buzz if number is divisible by 5', function() {
    var c = new Calc;
    expect(c.fizzbuzz(5)).toEqual('buzz')
  });

  it('returns fizz buzz if number is divisible by 15', function() {
    var c = new Calc;
    expect(c.fizzbuzz(15)).toEqual('fizz buzz')
  });

    it('returns error if user doesn\'t input an integer', function() {
      var c = new Calc;
      expect(c.fizzbuzz('string')).toEqual('Didn\'t I tell you to enter an integer?')
    });
  //
  // it('returns error if user input a string', function() {
  //   var c = new Calc;
  //   expect(c.fizzbuzz('string')).toEqual('Enter an integer, not a string')
  // });
  //
  // it('returns error if user input a float', function() {
  //   var c = new Calc;
  //   expect(c.fizzbuzz(1.5)).toEqual('Enter an integer, not a float')
  // });
});
