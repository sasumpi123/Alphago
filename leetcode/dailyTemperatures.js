/**
 * @param {number[]} T
 * @return {number[]}
 */

 // Runtime: 944 ms, faster than 31.98% 
 // Memory Usage: 48.1 MB, less than 88.59%
 // 
 var dailyTemperatures = function(temp) {
    const res = temp.map((element, idx) => {
       let count = 0;
       for (let i = idx + 1; i < temp.length; i++) {
         if (element < temp[i]) {
           count = i - idx;
           break;
         }
       }
       return count;
     });
     return res
  };
  
  