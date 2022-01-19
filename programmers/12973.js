// 테스트 1 〉	통과 (0.05ms, 30.3MB)
// 테스트 2 〉	통과 (9.49ms, 33.4MB)
// 테스트 3 〉	통과 (7.78ms, 33.5MB)
// 테스트 4 〉	통과 (6.86ms, 34MB)
// 테스트 5 〉	통과 (7.02ms, 33.9MB)
// 테스트 6 〉	통과 (6.59ms, 34MB)
// 테스트 7 〉	통과 (10.44ms, 33.9MB)
// 테스트 8 〉	통과 (6.74ms, 33.8MB)
// 테스트 9 〉	통과 (0.10ms, 30MB)
// 테스트 10 〉	통과 (0.07ms, 30.2MB)
// 테스트 11 〉	통과 (0.11ms, 30.3MB)
// 테스트 12 〉	통과 (0.08ms, 30.3MB)
// 테스트 13 〉	통과 (0.05ms, 30.3MB)
// 효율성  테스트
// 테스트 1 〉	통과 (30.26ms, 47.3MB)
// 테스트 2 〉	통과 (49.07ms, 35.2MB)
// 테스트 3 〉	통과 (25.87ms, 40.1MB)
// 테스트 4 〉	통과 (25.86ms, 39.8MB)
// 테스트 5 〉	통과 (23.39ms, 39.9MB)
// 테스트 6 〉	통과 (25.75ms, 39.8MB)
// 테스트 7 〉	통과 (23.93ms, 39.8MB)
// 테스트 8 〉	통과 (27.01ms, 42.7MB)

function solution(s) {
  const tempAry = [];
  for (let idx = 0; idx < s.length; idx++) {
    if (tempAry[tempAry.length - 1] == s[idx]) tempAry.pop();
    else tempAry.push(s[idx]);
  }
  return tempAry.length == 0 ? 1 : 0;
}
