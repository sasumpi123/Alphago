// 테스트 1 〉	통과 (0.06ms, 30.2MB)
// 테스트 2 〉	통과 (0.06ms, 29.9MB)
// 테스트 3 〉	통과 (7.18ms, 32.4MB)
// 테스트 4 〉	통과 (0.13ms, 29.9MB)
// 테스트 5 〉	통과 (0.40ms, 29.9MB)
// 테스트 6 〉	통과 (4.49ms, 32.6MB)
// 테스트 7 〉	통과 (8.31ms, 32.6MB)
// 테스트 8 〉	통과 (7.19ms, 32.8MB)
// 테스트 9 〉	통과 (9.36ms, 32.4MB)
// 테스트 10 〉	통과 (9.24ms, 32.4MB)
// 테스트 11 〉	통과 (0.06ms, 29.9MB)
// 테스트 12 〉	통과 (0.06ms, 30MB)
// 테스트 13 〉	통과 (0.06ms, 30.1MB)

function solution(brown, yellow) {
    for (let idx = yellow; idx > 0; idx--) {
        if (yellow % idx == 0) {
          if (idx + 1 + yellow / idx + 1 == brown / 2) return [idx + 2, yellow / idx + 2];
        }
      }
  }