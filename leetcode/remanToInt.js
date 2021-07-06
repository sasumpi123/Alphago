/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
    
      let result = 0;
    
      for (let idx = 0; idx < s.length; idx++) {
        const currentNum = s[idx];
        const nextNum = idx + 1 < s.length ? s[idx + 1] : 1001;
        if (obj[currentNum] < obj[nextNum]) {
          result -= obj[currentNum];
        } else {
          result += obj[currentNum];
        }
      }
      return result;    
};

