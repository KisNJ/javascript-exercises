const palindromes = function (word) {
    const splitted = word.split(" ");
    let modified = splitted.map((part) => {
      part = part.replace(",", "");
      part = part.replace(".", "");
      part=part.replace("!","");
      return part;
    });

    modified = modified.join("");
    //return modified;
    if (modified.toLowerCase() == Array.from(modified.toLowerCase()).reverse().join("")) {
      return true;
    }
    return false
  };
module.exports = palindromes;
