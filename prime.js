function primes(x){
  var arr = [];
  if(x<2){
    return arr;
  }else{
    arr[0] = 2; 
    for(var n=2; n<=x; n++){
      var y = true;
      for(var i in arr){
        if(arr[i]<=Math.sqrt(n)){
          if(n%arr[i]===0){
            y = false;
            break;
          }    
        }       
      }
      if(y && n>2){
        arr.push(n);      
      }
    }
    return arr;
  }
}
var a = primes(1000);
console.log(a);

