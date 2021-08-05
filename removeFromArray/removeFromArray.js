const removeFromArray = function (array,remove) {
    numberof=arguments.length;
    console.log("nummber of a-s: "+numberof)
    console.log(arguments[0]);
    let index="";
    for(let i=0;i<numberof-1;i++){
        index=array.indexOf(arguments[i+1]);
        if(index===-1){
          continue;
        }
        console.log(index);
        array.splice(index,1);
    }
    
    
    return array;
  };

module.exports = removeFromArray;
