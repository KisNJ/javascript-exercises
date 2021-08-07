const fibonacci = function(num) {
    num=parseInt(num);
    if(num<0){
        return "OOPS";
    }
    
    let k=0;
    let l=1;
    
    for(let i=1;i<num;i++){
      let temp=l;
      l=l+k;
      k=temp;
      
    };
    return l;
};

module.exports = fibonacci;
