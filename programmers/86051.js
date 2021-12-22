// 테스트 1 〉	통과 (0.04ms, 30.3MB)
// 테스트 2 〉	통과 (0.04ms, 30.3MB)
// 테스트 3 〉	통과 (0.05ms, 30.4MB)
// 테스트 4 〉	통과 (0.06ms, 30.3MB)
// 테스트 5 〉	통과 (0.04ms, 30.1MB)
// 테스트 6 〉	통과 (0.04ms, 30.4MB)
// 테스트 7 〉	통과 (0.08ms, 30.3MB)
// 테스트 8 〉	통과 (0.04ms, 30.3MB)
// 테스트 9 〉	통과 (0.04ms, 30.3MB)

function solution(numbers) {
  var answer = 0;

  for (let idx = 0; idx < 10; idx++) {
    if (numbers.includes(idx) == false) answer += idx;
  }

  return answer;
}
