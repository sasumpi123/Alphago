// 정확성
// 테스트 1 〉	통과 (0.09ms, 30.1MB)
// 테스트 2 〉	통과 (0.10ms, 30.1MB)
// 테스트 3 〉	통과 (0.12ms, 30MB)
// 테스트 4 〉	통과 (0.44ms, 30MB)
// 테스트 5 〉	통과 (0.84ms, 30MB)
// 테스트 6 〉	통과 (0.38ms, 29.9MB)
// 테스트 7 〉	통과 (0.82ms, 30.1MB)
// 테스트 8 〉	통과 (0.29ms, 30.1MB)
// 테스트 9 〉	통과 (0.10ms, 29.6MB)
// 테스트 10 〉	통과 (0.23ms, 29.6MB)

// 효율성
// 테스트 1 〉	통과 (4.22ms, 35.6MB)
// 테스트 2 〉	통과 (5.36ms, 35MB)
// 테스트 3 〉	통과 (6.23ms, 36.2MB)
// 테스트 4 〉	통과 (4.02ms, 35.6MB)
// 테스트 5 〉	실패 (시간 초과)
// 테스트 6 〉	실패 (시간 초과)
// 테스트 7 〉	실패 (시간 초과)
// 테스트 8 〉	통과 (4.24ms, 35.3MB)
// 테스트 9 〉	통과 (4.43ms, 35.3MB)
// 테스트 10 〉	통과 (6.40ms, 36MB)

// 효율성 체크부분에서 실패했다. 다시풀어야함

function solution(triangle) {
  for (let i = triangle.length - 2; 0 <= i; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
}
