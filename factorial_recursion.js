/*
 * author: x.deedee.xdd@gmail.com
 * date:2016-06-23 星期四 21:02:06
 * 求n！的最后一位非零数字
 */
"use strict";

//尾递归
function factorialN(n){
  function g(m,j){  
    if(m == 0 || j == n){
      return m;
    } else {
      return g(lastNonZeroNumber(m * j), j + 1);
    }
  }
  return g(n,1);
}



// 输入任意正整数，求其最末位非零数字
// 特别地, lastNonZeroNumber(0) = 0
function lastNonZeroNumber(n) {
  // 尾递归
  function g(m, j) {
    if (m == 0 || j != 0) {
      return j;
    } else {
      return g(m / 10, m % 10);
    }
  } 
  return g(n, 0);
}

//测试

console.log(factorialN(0));

console.log(factorialN(1));

console.log(factorialN(12));

console.log(factorialN(12300));

