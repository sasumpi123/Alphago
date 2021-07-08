// 테스트 1 〉	통과 (0.16ms, 29.9MB)
// 테스트 2 〉	통과 (0.26ms, 30MB)
// 테스트 3 〉	통과 (0.11ms, 30MB)
// 테스트 4 〉	통과 (0.11ms, 29.9MB)
// 테스트 5 〉	통과 (0.09ms, 30.2MB)
// 테스트 6 〉	통과 (0.16ms, 30.2MB)
// 테스트 7 〉	통과 (0.07ms, 29.9MB)
// 테스트 8 〉	통과 (0.04ms, 30MB)
// 테스트 9 〉	통과 (0.06ms, 30.1MB)
// 테스트 10 〉	통과 (0.09ms, 30MB)
// 테스트 11 〉	통과 (0.05ms, 29.9MB)
// 테스트 12 〉	통과 (0.06ms, 30MB)
// 테스트 13 〉	통과 (23.74ms, 32.4MB)
// 테스트 14 〉	통과 (0.05ms, 30.1MB)
// 테스트 15 〉	통과 (59.89ms, 32.5MB)
// 테스트 16 〉	통과 (2.49ms, 32.6MB)
// 테스트 17 〉	통과 (15.23ms, 32.6MB)
// 테스트 18 〉	통과 (0.06ms, 30MB)
function solution(w, h) {
  if (w == 1 || h == 1) return 0;
  if (w == h) return w * h - w;
  const mul = gcd(w, h);
  const minW = w / mul;
  const minH = h / mul;
  const empty = minW + minH - 1;

  return w * h - mul * empty;
}
function gcd(w, h) {
  let result = 1;
  let i = 2;
  while (w >= i && h >= i) {
    if (w % i === 0 && h % i === 0) {
      w /= i;
      h /= i;
      result *= i;
    } else {
      i++;
    }
  }
  return result;
}
