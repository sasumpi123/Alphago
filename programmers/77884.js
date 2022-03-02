// 테스트 1 〉	통과 (3.98ms, 32.1MB)
// 테스트 2 〉	통과 (2.71ms, 32.7MB)
// 테스트 3 〉	통과 (2.62ms, 32.1MB)
// 테스트 4 〉	통과 (1.73ms, 32.7MB)
// 테스트 5 〉	통과 (3.82ms, 32.1MB)
// 테스트 6 〉	통과 (1.57ms, 32MB)
// 테스트 7 〉	통과 (1.01ms, 32.3MB)

function solution(left, right) {
  let answer = 0;

  for (let idx = left; idx <= right; idx++) {
    const divisorCount = getDivisorCount(idx);
    if (divisorCount % 2 == 0) answer += idx;
    else answer -= idx;
  }
  return answer;
}

function getDivisorCount(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  return count;
}
