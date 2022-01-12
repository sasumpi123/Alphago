// 테스트 1 〉	통과 (0.09ms, 30.1MB)
// 테스트 2 〉	통과 (0.10ms, 30.2MB)
// 테스트 3 〉	통과 (0.12ms, 30MB)
// 테스트 4 〉	통과 (0.18ms, 30.3MB)
// 테스트 5 〉	통과 (0.09ms, 30.3MB)
// 테스트 6 〉	통과 (0.16ms, 30.2MB)
// 테스트 7 〉	통과 (0.09ms, 30.3MB)
// 테스트 8 〉	통과 (0.10ms, 30.2MB)
// 테스트 9 〉	통과 (0.11ms, 30.3MB)

function solution(absolutes, signs) {
  let answer = 0;
  for (let idx = 0; idx < absolutes.length; idx++) {
    if (signs[idx]) answer += absolutes[idx];
    else answer -= absolutes[idx];
  }

  return answer;
}
