// Runtime     Memory
// 144 ms,     48.7 MB
var threeSum = function (nums) {
  const res = [];
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] > 0) return res;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 || nums[i] == nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    let target = -nums[i];
    while (j < k) {
      if (nums[j] + nums[k] == target) {
        let temp = [nums[i], nums[j], nums[k]];
        res.push(temp);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      } else if (nums[j] + nums[k] > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return res;
};
