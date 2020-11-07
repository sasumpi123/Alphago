// 테스트 1 〉	통과 (0.76ms, 30.1MB)
// 테스트 2 〉	통과 (10.58ms, 33MB)
// 테스트 3 〉	통과 (0.13ms, 30.1MB)
// 테스트 4 〉	통과 (14.13ms, 32.9MB)
// 테스트 5 〉	통과 (27.02ms, 33MB)
// 테스트 6 〉	통과 (17.31ms, 33MB)
// 테스트 7 〉	통과 (0.68ms, 30.1MB)
// 테스트 8 〉	통과 (0.31ms, 30.2MB)
// 테스트 9 〉	통과 (4.81ms, 32.9MB)
// 테스트 10 〉	통과 (0.26ms, 30.1MB)
// 테스트 11 〉	통과 (0.14ms, 30MB)
// 테스트 12 〉	통과 (0.41ms, 30.1MB)
// 테스트 13 〉	통과 (0.90ms, 30.1MB)
// 테스트 14 〉	통과 (0.15ms, 30MB)

function solution(bridge_length, weight, truck_weights) {
  const maxSize = truck_weights.length;
  const arrived = [];
  const onBridge = [];

  onBridge.push([truck_weights.shift(), 1]);

  let cnt = 1;
  let sum = onBridge[0][0];
  while (true) {
    cnt++;
    if (arrived.length == maxSize) break;
    if (sum + truck_weights[0] <= weight) {
      var truck = truck_weights.shift();
      onBridge.push([truck, 0]);
      sum += truck;
    }

    for (let i = 0; i < onBridge.length; i++) {
      onBridge[i][1]++;
      if (onBridge[i][1] == bridge_length) {
        sum -= onBridge[i][0];
        arrived.push(onBridge.shift());
        i--;
      }
    }
  }
  return cnt;
}
