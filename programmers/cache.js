// 테스트 1 〉	통과 (0.17ms, 30.1MB)
// 테스트 2 〉	통과 (0.16ms, 30MB)
// 테스트 3 〉	통과 (0.17ms, 30.1MB)
// 테스트 4 〉	통과 (0.17ms, 30.1MB)
// 테스트 5 〉	통과 (0.14ms, 30MB)
// 테스트 6 〉	통과 (0.13ms, 30.2MB)
// 테스트 7 〉	통과 (0.13ms, 30MB)
// 테스트 8 〉	통과 (0.16ms, 30.1MB)
// 테스트 9 〉	통과 (0.16ms, 30MB)
// 테스트 10 〉	통과 (0.29ms, 30.2MB)
// 테스트 11 〉	통과 (53.78ms, 38MB)
// 테스트 12 〉	통과 (0.29ms, 29.9MB)
// 테스트 13 〉	통과 (0.36ms, 30MB)
// 테스트 14 〉	통과 (0.49ms, 29.9MB)
// 테스트 15 〉	통과 (0.64ms, 29.8MB)
// 테스트 16 〉	통과 (0.75ms, 30.1MB)
// 테스트 17 〉	통과 (0.17ms, 29.8MB)
// 테스트 18 〉	통과 (1.34ms, 30.1MB)
// 테스트 19 〉	통과 (1.83ms, 30.1MB)
// 테스트 20 〉	통과 (2.26ms, 30MB)

function solution() {
  const cityAry = [];
  const useAry = [];
  var answer = 0;

  if (cacheSize == 0) return cities.length * 5;

  cityAry.push(cities[0].toLowerCase());
  useAry.push(0);
  answer += 5;

  for (let i = 1; i < cities.length; i++) {
    if (cityAry.length < cacheSize) {
      if (cityAry.indexOf(cities[i].toLowerCase()) == -1) {
        for (let j = 0; j < useAry.length; j++) {
          useAry[j] += 1;
        }
        cityAry.push(cities[i].toLowerCase());
        useAry.push(0);
        answer += 5;
      } else {
        useAry[cityAry.indexOf(cities[i].toLowerCase())] = 0;
        answer++;
      }
    } else {
      if (cityAry.indexOf(cities[i].toLowerCase()) == -1) {
        for (let j = 0; j < useAry.length; j++) {
          useAry[j] += 1;
        }
        cityAry[useAry.indexOf(Math.max.apply(null, useAry))] = cities[
          i
        ].toLowerCase();
        useAry[useAry.indexOf(Math.max.apply(null, useAry))] = 0;
        answer += 5;
      } else {
        for (let j = 0; j < useAry.length; j++) {
          useAry[j] += 1;
        }
        useAry[cityAry.indexOf(cities[i].toLowerCase())] = 0;
        answer++;
      }
    }
  }

  return answer;
}
