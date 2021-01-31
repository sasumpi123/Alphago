// 테스트 1 〉	통과 (154.06ms, 38.6MB)
// 테스트 2 〉	통과 (82.95ms, 36MB)
// 테스트 3 〉	통과 (201.32ms, 43.4MB)
// 테스트 4 〉	통과 (5.63ms, 32.5MB)
// 테스트 5 〉	통과 (134.11ms, 37.1MB)
// 테스트 6 〉	통과 (118.16ms, 37.9MB)
// 테스트 7 〉	통과 (0.14ms, 30MB)
// 테스트 8 〉	통과 (0.13ms, 30.1MB)
// 테스트 9 〉	통과 (0.08ms, 30MB)
// 테스트 10 〉	통과 (0.12ms, 30.1MB)
// 테스트 11 〉	통과 (0.13ms, 30.2MB)

function solution(arr) {
    arr.sort((a, b) => {
      const tempA = a.toString();
      const tempB = b.toString();
      return tempB + tempA - (tempA + tempB);
    });
    let res = "";
    arr.forEach((e) => {
      res += e;
    });
    return res[0] == "0" ? "0" : res;
}