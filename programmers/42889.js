// 테스트 1 〉	통과 (0.34ms, 30.2MB)
// 테스트 2 〉	통과 (0.66ms, 30.1MB)
// 테스트 3 〉	통과 (5.11ms, 32.4MB)
// 테스트 4 〉	통과 (31.59ms, 36.6MB)
// 테스트 5 〉	통과 (70.09ms, 42.1MB)
// 테스트 6 〉	통과 (0.74ms, 30.3MB)
// 테스트 7 〉	통과 (4.52ms, 32.1MB)
// 테스트 8 〉	통과 (31.67ms, 36.9MB)
// 테스트 9 〉	통과 (64.78ms, 41.7MB)
// 테스트 10 〉	통과 (28.03ms, 36.5MB)
// 테스트 11 〉	통과 (28.22ms, 36.3MB)
// 테스트 12 〉	통과 (42.45ms, 39.8MB)
// 테스트 13 〉	통과 (46.17ms, 40.5MB)
// 테스트 14 〉	통과 (0.32ms, 30.4MB)
// 테스트 15 〉	통과 (15.95ms, 35.1MB)
// 테스트 16 〉	통과 (8.81ms, 33.6MB)
// 테스트 17 〉	통과 (15.93ms, 34.9MB)
// 테스트 18 〉	통과 (8.80ms, 33.5MB)
// 테스트 19 〉	통과 (2.41ms, 30.2MB)
// 테스트 20 〉	통과 (11.70ms, 33.9MB)
// 테스트 21 〉	통과 (18.43ms, 36.1MB)
// 테스트 22 〉	통과 (12.53ms, 40.2MB)
// 테스트 23 〉	통과 (31.88ms, 40.5MB)
// 테스트 24 〉	통과 (47.64ms, 41.2MB)
// 테스트 25 〉	통과 (0.29ms, 30.5MB)
// 테스트 26 〉	통과 (0.27ms, 30.3MB)
// 테스트 27 〉	통과 (0.14ms, 30.3MB)

function solution(N, stages) {
  const tempAry = new Array(N - 1);

  stages.sort((a, b) => {
    return b - a;
  });

  let challenger = 1;
  for (let idx = 0; idx < stages.length; idx++) {
    if (tempAry[stages[idx] - 1] == undefined) {
      tempAry[stages[idx] - 1] = {
        totalChallenger: 0,
        currentChallenger: 0,
      };
    }
    tempAry[stages[idx] - 1].currentChallenger++;
    tempAry[stages[idx] - 1].totalChallenger = challenger++;
  }

  for (let idx = 0; idx <= N; idx++) {
    if (tempAry[idx] == undefined) {
      const totalChallenger = tempAry[idx + 1];
      tempAry[idx] = {
        totalChallenger: totalChallenger ? totalChallenger.totalChallenger : 0,
        currentChallenger: 0,
      };
    }
    const failRate =
      tempAry[idx].currentChallenger / tempAry[idx].totalChallenger;
    tempAry[idx].failRate = Number.isNaN(failRate) ? 0 : failRate;

    tempAry[idx].stage = idx + 1;
  }

  if (tempAry[tempAry.length - 1].stage > N) tempAry.pop();

  const answer = tempAry
    .sort(function (a, b) {
      return b.failRate - a.failRate;
    })
    .map((e) => {
      return e.stage;
    });

  return answer;
}
