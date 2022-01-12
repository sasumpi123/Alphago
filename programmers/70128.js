// 테스트 1 〉	통과 (0.15ms, 30.3MB)
// 테스트 2 〉	통과 (0.04ms, 30.3MB)
// 테스트 3 〉	통과 (0.07ms, 30.2MB)
// 테스트 4 〉	통과 (0.05ms, 30.2MB)
// 테스트 5 〉	통과 (0.05ms, 29.8MB)
// 테스트 6 〉	통과 (0.06ms, 30.3MB)
// 테스트 7 〉	통과 (0.07ms, 30.3MB)
// 테스트 8 〉	통과 (0.14ms, 30.1MB)
// 테스트 9 〉	통과 (0.09ms, 30.4MB)

function solution(a, b) {
  let answer = 0;
  for (let idx = 0; idx < a.length; idx++) {
    answer += a[idx] * b[idx];
  }

  return answer;
}
