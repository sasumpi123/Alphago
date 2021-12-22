// 테스트 1 〉	통과 (0.16ms, 30.2MB)
// 테스트 2 〉	통과 (0.16ms, 30.4MB)
// 테스트 3 〉	통과 (0.24ms, 30.1MB)
// 테스트 4 〉	통과 (0.26ms, 30.1MB)
// 테스트 5 〉	통과 (2.84ms, 30.3MB)
// 테스트 6 〉	통과 (3.62ms, 30.3MB)
// 테스트 7 〉	통과 (2.66ms, 30.4MB)
// 테스트 8 〉	통과 (2.42ms, 30.2MB)
// 테스트 9 〉	통과 (1.99ms, 30.6MB)
// 테스트 10 〉	통과 (3.70ms, 30.5MB)
// 테스트 11 〉	통과 (2.01ms, 30.2MB)
// 테스트 12 〉	통과 (2.11ms, 30.2MB)
// 테스트 13 〉	통과 (3.53ms, 30.4MB)
// 테스트 14 〉	통과 (3.57ms, 30.5MB)
// 테스트 15 〉	통과 (0.31ms, 30.3MB)
// 테스트 16 〉	통과 (0.34ms, 30.3MB)
// 테스트 17 〉	통과 (0.40ms, 30.1MB)
// 테스트 18 〉	통과 (0.31ms, 30.2MB)
// 테스트 19 〉	통과 (1.88ms, 30.4MB)
// 테스트 20 〉	통과 (1.89ms, 30.4MB)
// 테스트 21 〉	통과 (1.98ms, 30.3MB)
// 테스트 22 〉	통과 (1.88ms, 30.4MB)
// 테스트 23 〉	통과 (1.81ms, 30.5MB)
// 테스트 24 〉	통과 (1.98ms, 30.5MB)
// 테스트 25 〉	통과 (164.91ms, 75.9MB)
// 테스트 26 〉	통과 (295.93ms, 84.1MB)
// 테스트 27 〉	통과 (267.74ms, 99.4MB)
// 테스트 28 〉	통과 (245.40ms, 99.7MB)
// 테스트 29 〉	통과 (263.08ms, 100MB)
// 테스트 30 〉	통과 (184.52ms, 79.2MB)
// 테스트 31 〉	통과 (252.69ms, 105MB)
// 테스트 32 〉	통과 (201.31ms, 92.8MB)

function solution(record) {
  var answer = [];

  const userObj = {};
  const isLeave = (action) => {
    if (action == "Leave") return true;
    return false;
  };
  const getActionStr = (action) => {
    return isLeave(action) ? "나갔습니다." : "들어왔습니다.";
  };
  let chatMasterUid = undefined;
  for (let idx = 0; idx < record.length; idx++) {
    const words = record[idx].split(" ");
    const name = words[2];
    const uid = words[1];
    if (idx == 0) chatMasterUid = uid;
    if (userObj[uid] == undefined) {
      userObj[uid] = {
        action: "",
        name: "",
      };
    }
    userObj[uid].action = words[0];
    userObj[uid].name = name ? name : userObj[uid].name;
  }
  for (let idx = 0; idx < record.length; idx++) {
    const words = record[idx].split(" ");
    const uid = words[1];
    const actionStr = getActionStr(words[0]);
    if (words[0] != "Change")
      answer.push(`${userObj[uid].name}님이 ${actionStr}`);
  }
  return answer;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
