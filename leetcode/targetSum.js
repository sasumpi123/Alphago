// Runtime: 84 ms, faster than 98.23% of JavaScript online submissions for Target Sum.
// Memory Usage: 39 MB, less than 68.43% of JavaScript online submissions for Target Sum.
var findTargetSumWays = function (nums, S) {
  const sum = nums.reduce((a, b) => a + b);

  if ((sum + S) % 2 !== 0 || sum < S) return 0;
  const targetSum = (sum + S) / 2;
  const dp = Array(targetSum + 1).fill(0);
  dp[0] = 1;

  for (let idx = 0; idx < nums.length; idx++) {
    for (let targetIdx = targetSum; targetIdx >= nums[idx]; targetIdx--) {
      dp[targetIdx] += dp[targetIdx - nums[idx]];
    }
  }

  return dp[targetSum];
};
