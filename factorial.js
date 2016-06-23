/*
 * author: x.deedee.xdd@gmail.com
 * date:2016-06-23 星期四 21:02:06
 * 求n！的最后一位非零数字
 */
"use strict";

function factorialN(n){
  if(n==0){
    return 1;
  } else {
    var x = 1;
    for(var i=1; i<=n; i++){
      x = lastNonZeroNumber(x * i);
    }
    return x;
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


var a = factorialN(0);
console.log(a);

var a = factorialN(1);
console.log(a);

var a = factorialN(12);
console.log(a);

var a = factorialN(12300);
  console.log(a);
 
