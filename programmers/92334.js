// 테스트 1 〉	통과 (0.29ms, 30MB)
// 테스트 2 〉	통과 (0.34ms, 30.2MB)
// 테스트 3 〉	통과 (388.07ms, 76.6MB)
// 테스트 4 〉	통과 (0.44ms, 30MB)
// 테스트 5 〉	통과 (0.41ms, 30.3MB)
// 테스트 6 〉	통과 (2.11ms, 30.6MB)
// 테스트 7 〉	통과 (5.01ms, 30.5MB)
// 테스트 8 〉	통과 (9.60ms, 31.8MB)
// 테스트 9 〉	통과 (138.59ms, 53.8MB)
// 테스트 10 〉	통과 (101.09ms, 53.4MB)
// 테스트 11 〉	통과 (271.99ms, 76.3MB)
// 테스트 12 〉	통과 (0.70ms, 30.5MB)
// 테스트 13 〉	통과 (0.61ms, 30.1MB)
// 테스트 14 〉	통과 (138.70ms, 49.9MB)
// 테스트 15 〉	통과 (176.63ms, 56.7MB)
// 테스트 16 〉	통과 (0.57ms, 30.2MB)
// 테스트 17 〉	통과 (0.64ms, 30.5MB)
// 테스트 18 〉	통과 (0.95ms, 30.4MB)
// 테스트 19 〉	통과 (2.51ms, 30.3MB)
// 테스트 20 〉	통과 (153.73ms, 50.4MB)
// 테스트 21 〉	통과 (257.53ms, 56.5MB)
// 테스트 22 〉	통과 (0.12ms, 30MB)
// 테스트 23 〉	통과 (0.25ms, 30.1MB)
// 테스트 24 〉	통과 (0.26ms, 30.3MB)

function solution(id_list, report, k) {
  var answer = id_list.map(() => {
    return 0;
  });
  const tempObj = {};
  for (const value of report) {
    const from = value.split(" ")[0];
    const to = value.split(" ")[1];

    if (tempObj[to] == undefined) {
      tempObj[to] = {
        count: 1,
        from: [from],
      };
    }
    if (tempObj[to].from.includes(from) == false) {
      tempObj[to].count += 1;
      tempObj[to].from.push(from);
    }
  }

  for (const key in tempObj) {
    const fromAry = tempObj[key].from;
    if (tempObj[key].count >= k) {
      for (const value of fromAry) {
        answer[id_list.indexOf(value)] += 1;
      }
    }
  }
  return answer;
}

solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);
