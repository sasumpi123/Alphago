// 테스트 1 〉	통과 (0.12ms, 30.2MB)
// 테스트 2 〉	통과 (0.07ms, 30.1MB)
// 테스트 3 〉	통과 (0.06ms, 30.1MB)
// 테스트 4 〉	통과 (0.07ms, 30.4MB)
// 테스트 5 〉	통과 (0.08ms, 30.4MB)
// 테스트 6 〉	통과 (0.09ms, 30.3MB)
// 테스트 7 〉	통과 (0.07ms, 30.3MB)
// 테스트 8 〉	통과 (0.08ms, 30.4MB)
// 테스트 9 〉	통과 (0.07ms, 30.3MB)
// 테스트 10 〉	통과 (0.09ms, 30.2MB)
// 테스트 11 〉	통과 (0.09ms, 30.3MB)
// 테스트 12 〉	통과 (0.07ms, 30.3MB)
// 테스트 13 〉	통과 (0.11ms, 30.2MB)
// 테스트 14 〉	통과 (0.07ms, 30.3MB)
// 테스트 15 〉	통과 (0.07ms, 30.4MB)

function solution(lottos, win_nums) {
  const fakeNum = lottos.filter((e) => 0 === e).length;
  const correctCount = lottos.filter((e) => win_nums.includes(e)).length;
  if (fakeNum == 6) return [1, 6];
  if (correctCount == 6) return [1, 1];

  const maxRate = correctCount + fakeNum <= 1 ? 6 : 7 - correctCount - fakeNum;
  const minRate = 7 - correctCount == 7 ? 6 : 7 - correctCount;
  return [maxRate, minRate];
}
solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]);
