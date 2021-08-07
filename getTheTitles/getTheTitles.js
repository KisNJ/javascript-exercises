const getTheTitles = function(array) {
    const titles=array.map((book)=>{
      return book.title;
    });
    return titles
    };
    

module.exports = getTheTitles;
