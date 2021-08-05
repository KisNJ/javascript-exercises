
  let y;
  let sum;
  const sumAll = function (num1, num2) {
    y = 0;
    sum = 0;
    if (typeof num1!="number" || typeof num2!="number"||num1<0||num2<0) {
      return "ERROR";
    }
    if (num1 > num2) {
      y = num2;
      num2 = num1;
      num1 = y;
    }
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  };

module.exports = sumAll;
