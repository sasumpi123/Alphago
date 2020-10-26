// Runtime     Memory
// 128 ms	    39.1 MB

var twoSum = function (nums, target) {
  const res = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
};

twoSum();
