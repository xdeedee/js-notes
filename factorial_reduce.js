/*
 * author: x.deedee.xdd@gmail.com
 * date:2016-06-23 星期四 21:02:06
 * 求n！的最后一位非零数字
 */
"use strict";

//建立一个1～n的arr
function arr(n){
  var a =new Array();
  for (var i=0; i<n; i++){
    a[i] = i+1;   
  }
  return a;
}

function factorialN(n){
  if(n==0){
    return 1;
  } else {
    return arr(n).reduce(function (x, y){
      return lastNonZeroNumber(x * y);
      // lastNonZeroNumber(x * y);
    });
  }
}
  
//取n的非零末尾数
function lastNonZeroNumber(n){
  var m = n;
  while(m%10==0){
    m = m/10;
  }
  return m%10;
}


    
//测试
console.log(factorialN(0));
console.log(factorialN(1));
console.log(factorialN(12));
console.log(factorialN(12300));

