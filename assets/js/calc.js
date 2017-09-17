function Calc() {
}

Calc.prototype.fizzbuzz = function(number) {
  if (typeof number==='number' && (number%1)===0) {
    if ((number%15)===0) {
      return 'fizz buzz'
    }
    else if ((number%3)===0) {
      return 'fizz';
    }
    else if ((number%5)===0) {
      return 'buzz';
    }
    else {
      return number;
    }
  }
  else {
    return 'Didn\'t I tell you to enter an integer?'
  }
};
