function solution(N, stages) {
  const tempAry = new Array(N - 1);

  stages.sort(function (a, b) {
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
      tempAry[idx] = {
        totalChallenger: tempAry[idx + 1]
          ? tempAry[idx + 1].totalChallenger
          : 0,
        currentChallenger: 0,
      };
    }
    tempAry[idx].failRate =
      tempAry[idx].currentChallenger / tempAry[idx].totalChallenger;

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

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
//, [3, 4, 2, 1, 5]
// 4	[4,4,4,4,4]	[4,1,2,3]
