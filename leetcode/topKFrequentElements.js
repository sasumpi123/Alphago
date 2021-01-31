// Runtime: 92 ms, faster than 84.06% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 40.6 MB, less than 95.06% of JavaScript online submissions for Top K Frequent Elements.
var topKFrequent = function(nums, k) {
    const obj = {};
    nums.forEach((e) => {
      if (obj[e] == undefined) {
        obj[e] = 0;
      } else {
        obj[e] = obj[e] + 1;
      }
    });
    const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
    return sorted.slice(0, k);

};