// 테스트 1 〉	통과 (0.43ms, 30MB)
// 테스트 2 〉	통과 (0.33ms, 30.4MB)
// 테스트 3 〉	통과 (0.29ms, 30.3MB)
// 테스트 4 〉	통과 (0.41ms, 30MB)
// 테스트 5 〉	통과 (0.42ms, 30.4MB)
// 테스트 6 〉	통과 (0.44ms, 30.3MB)
// 테스트 7 〉	통과 (0.31ms, 30.3MB)
// 테스트 8 〉	통과 (0.47ms, 30.2MB)
// 테스트 9 〉	통과 (0.40ms, 30.1MB)
// 테스트 10 〉	통과 (0.61ms, 30.3MB)

function solution(s) {
  return Number(
    s
      .replace(/zero/gi, "0")
      .replace(/one/gi, "1")
      .replace(/two/gi, "2")
      .replace(/three/gi, "3")
      .replace(/four/gi, "4")
      .replace(/five/gi, "5")
      .replace(/six/gi, "6")
      .replace(/seven/gi, "7")
      .replace(/eight/gi, "8")
      .replace(/nine/gi, "9")
  );
}
