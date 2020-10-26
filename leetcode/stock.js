/**
성훈
Runtime         Memory
420 ms	        37.6 MB
 */
var maxProfit = function (prices) {
    const length = prices.length;
    let maxPrice = 0;
    let price = 0;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i; j < length; j++) {
            price = prices[i] < prices[j] ? prices[j] - prices[i] : price;
            maxPrice = price > maxPrice ? maxPrice = price : maxPrice;
        }
    }

    return maxPrice;
};

/**
대수
Runtime         Memory
80 ms	        37.6 MB
 */
function solution(prices) {
    let start = 0;
    let max = 0;

    for (let index = 1; index < prices.length; index++) {
        if (prices[index] - prices[start] > 0) {
            max = max < prices[index] - prices[start] ? prices[index] - prices[start] : max;
        } else {
            start = index;
        }
    }

    return max;
}