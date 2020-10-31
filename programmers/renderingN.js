// 테스트 1 〉	통과 (1.62ms, 30MB)
// 테스트 2 〉	통과 (0.16ms, 30.2MB)
// 테스트 3 〉	통과 (0.19ms, 30MB)
// 테스트 4 〉	통과 (49.87ms, 37.4MB)
// 테스트 5 〉	통과 (41.23ms, 37.6MB)
// 테스트 6 〉	통과 (0.50ms, 29.9MB)
// 테스트 7 〉	통과 (0.50ms, 30.1MB)
// 테스트 8 〉	통과 (213.01ms, 37.3MB)
// 테스트 9 〉	통과 (0.13ms, 30MB)

// DP에 대해 숙련도가 매우 부족함

function solution(N, number) {
  const set = new Array(8).fill().map(() => new Set());

  for (let i = 0; i < 8; i++) {
    set[i].add(Number(N.toString().repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const ans1 of set[j]) {
        for (const ans2 of set[i - j - 1]) {
          set[i].add(ans1 + ans2);
          set[i].add(ans1 - ans2);
          set[i].add(ans1 * ans2);
          set[i].add(ans1 / ans2);
        }
      }
    }
    if (set[i].has(number)) return i + 1;
  }
  return -1;
}

solution();
