function solution(relation) {
  let answer = 0;
  const maxCount = relation[0].length;
  const dic = {};
  for (let i = 0; i < relation.length; i++) {
    for (let j = 0; j < maxCount; j++) {
      if (dic[j] == undefined) {
        dic[j] = [];
      }
      dic[j].push(relation[i][j]);
    }
  }

  const candidtaeKey = getCandidateKey(dic);
  if (candidtaeKey.length > 0) {
    answer += candidtaeKey.length;
    for (let idx = 0; idx < candidtaeKey.length; idx++) {
      delete dic[candidtaeKey[idx]];
    }
  }

  console.error(answer);
  return answer;
}

function getCandidateKey(obj) {
  const targetKey = [];
  for (const key in obj) {
    const set = new Set(obj[key]);
    if (obj[key].length !== set.size) {
      continue;
    } else {
      targetKey.push(key);
    }
  }
  return targetKey;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
