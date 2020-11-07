// 테스트 1 〉	통과 (0.12ms, 30.1MB)
// 테스트 2 〉	통과 (0.09ms, 30MB)
// 테스트 3 〉	통과 (0.12ms, 30.1MB)
// 테스트 4 〉	통과 (0.11ms, 30.1MB)
// 테스트 5 〉	통과 (0.12ms, 30MB)
// 테스트 6 〉	통과 (0.13ms, 29.8MB)
// 테스트 7 〉	통과 (0.12ms, 30.1MB)
// 테스트 8 〉	통과 (0.12ms, 30MB)
// 테스트 9 〉	통과 (0.07ms, 30.1MB)
// 테스트 10 〉	통과 (0.08ms, 30MB)
// 테스트 11 〉	통과 (0.09ms, 30MB)
// 테스트 12 〉	통과 (0.11ms, 30.2MB)
// 테스트 13 〉	통과 (0.13ms, 30MB)
// 테스트 14 〉	통과 (0.12ms, 30MB)
// 테스트 15 〉	통과 (0.09ms, 30.2MB)
// 테스트 16 〉	통과 (0.06ms, 30.1MB)
// 테스트 17 〉	통과 (0.12ms, 30.2MB)
// 테스트 18 〉	통과 (0.08ms, 29.9MB)
// 테스트 19 〉	통과 (0.11ms, 30.1MB)
// 테스트 20 〉	통과 (0.10ms, 30MB)
// 테스트 21 〉	통과 (0.09ms, 30.1MB)
// 테스트 22 〉	통과 (0.09ms, 30MB)
// 테스트 23 〉	통과 (0.09ms, 30MB)
// 테스트 24 〉	통과 (0.12ms, 30MB)
// 테스트 25 〉	통과 (0.13ms, 30.2MB)
// 테스트 26 〉	통과 (0.14ms, 30MB)
// 테스트 27 〉	통과 (0.10ms, 30.2MB)
// 테스트 28 〉	통과 (0.11ms, 30MB)

function solution(clothes) {
  const temp = new Map();
  let mul = 1;
  for (let i = 0; i < clothes.length; i++) {
    if (temp.get(clothes[i][1]) == undefined) {
      temp.set(clothes[i][1], 1);
    } else {
      temp.set(clothes[i][1], temp.get(clothes[i][1]) + 1);
    }
  }
  if (temp.size == 1) return clothes.length;
  temp.forEach(function (value) {
    mul *= value + 1;
  });
  return mul - 1;
}
