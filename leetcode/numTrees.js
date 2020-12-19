// Runtime: 76 ms, faster than 73.60% of JavaScript online submissions for Unique Binary Search Trees.
// Memory Usage: 38.6 MB, less than 24.22% of JavaScript online submissions for Unique Binary Search Trees.
var numTrees = function(n) {
    dp = [1];    
    for (let i = 1; i <= n; ++i) {
        let temp = 0;
        for (let j = 0; j < i; ++j) {
            temp += (dp[j] * dp[i - j - 1]);
        }
        dp.push(temp);
    }
    return dp[dp.length - 1];
}
