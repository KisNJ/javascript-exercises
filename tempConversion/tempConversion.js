let c=0;
let f=0;
const ftoc = function(fp) {
  c=(fp-32)*(5/9);
  c=(Math.round(c * 10) / 10);
  return c;
};

const ctof = function(cp) {
f=cp*(9/5)+32;
f=(Math.round(f * 10) / 10);
return f;
};

module.exports = {
  ftoc,
  ctof
};
