// Runtime: 944 ms, faster than 29.28% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 41.4 MB, less than 22.71% of JavaScript online submissions for Container With Most Water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(temp) {
    let res = 0;
    for (let i = 0; i < temp.length - 1; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        const water = temp[i] <= temp[j] ? temp[i] * (j - i) : temp[j] * (j - i);
        if (res < water) res = water;
      }
    }
    return res
};