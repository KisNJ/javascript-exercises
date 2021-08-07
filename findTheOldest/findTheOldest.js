const findTheOldest = function(array) {
    const oldest=array.reduce((previous,current)=>{
        let today=new Date();
        const previousAge=getAge(previous.yearOfBirth,previous.yearOfDeath);
        const currentAge=getAge(current.yearOfBirth,current.yearOfDeath);
        return previousAge<currentAge?current:previous;
    });
    return oldest;
    };
    
    
    const getAge = function(birth, death) {
      if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
    };

module.exports = findTheOldest;
