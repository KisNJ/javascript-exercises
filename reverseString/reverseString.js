
  let second = "";
  const reverseString = function (word) {
    second = "";
    for (let i = (word.length - 1); i >= 0; i--) {
      
      second = second + word[i];

    }
    return second
  };

module.exports = reverseString;
