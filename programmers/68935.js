// 테스트 1 〉	통과 (0.05ms, 30.1MB)
// 테스트 2 〉	통과 (0.04ms, 30.3MB)
// 테스트 3 〉	통과 (0.04ms, 30MB)
// 테스트 4 〉	통과 (0.05ms, 30.1MB)
// 테스트 5 〉	통과 (0.04ms, 30MB)
// 테스트 6 〉	통과 (0.04ms, 30.2MB)
// 테스트 7 〉	통과 (0.07ms, 30.4MB)
// 테스트 8 〉	통과 (0.04ms, 30.3MB)
// 테스트 9 〉	통과 (0.04ms, 30.3MB)
// 테스트 10 〉	통과 (0.04ms, 30.4MB)

function solution(n) {
  return Number.parseInt(n.toString(3).split("").reverse().join(""), 3);
}

solution(45);
