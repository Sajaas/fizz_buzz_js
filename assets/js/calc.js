function Calc() {
}

Calc.prototype.fizzbuzz = function(number) {
  if ((number%3)===0) {
    return 'fizz';
  }
  // else if (number%5) {
  //   return 'buzz';
  // }
  else if (typeof number==='number' && (number%1)===0) {
    return number;
  }
}
