let joined = "";
const repeatString = function (word, number) {
    joined="";
    if(number<0){
        return "ERROR";
    }
  for (let i = 0; i < number; i++) {
    joined = joined.concat(word);
  }
  return joined;
};

module.exports = repeatString;
