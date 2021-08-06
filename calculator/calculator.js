const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(array) {
	const sum1=array.reduce((total,number)=>{
    total+=number;
    return total;
  },0);
  return sum1;
};

const multiply = function(array1) {
  const multipled=array1.reduce((a,m)=>{
    a*=m;
    return a;
  },1);
  return multipled;
};

const power = function(num,to) {
	return Math.pow(num,to);
};

const factorial = function(n) {
  let factorial=1;
	if(n===0) return 1;
  for(let i=n;i>=1;i--){
    factorial*=i;
  }
  return factorial;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
