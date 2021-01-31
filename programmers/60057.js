// 테스트 1 〉	통과 (0.12ms, 30.2MB)
// 테스트 2 〉	통과 (0.71ms, 30.3MB)
// 테스트 3 〉	통과 (0.44ms, 30MB)
// 테스트 4 〉	통과 (0.20ms, 30MB)
// 테스트 5 〉	통과 (0.12ms, 30.2MB)
// 테스트 6 〉	통과 (0.21ms, 30.2MB)
// 테스트 7 〉	통과 (0.75ms, 30MB)
// 테스트 8 〉	통과 (0.76ms, 30.1MB)
// 테스트 9 〉	통과 (0.63ms, 30.1MB)
// 테스트 10 〉	통과 (6.54ms, 33.4MB)
// 테스트 11 〉	통과 (0.28ms, 30.1MB)
// 테스트 12 〉	통과 (0.28ms, 30.1MB)
// 테스트 13 〉	통과 (0.31ms, 30.2MB)
// 테스트 14 〉	통과 (0.89ms, 30.1MB)
// 테스트 15 〉	통과 (0.31ms, 30.2MB)
// 테스트 16 〉	통과 (0.16ms, 30.1MB)
// 테스트 17 〉	통과 (1.25ms, 30MB)
// 테스트 18 〉	통과 (1.23ms, 30.2MB)
// 테스트 19 〉	통과 (1.22ms, 29.9MB)
// 테스트 20 〉	통과 (6.56ms, 33MB)
// 테스트 21 〉	통과 (5.96ms, 33.2MB)
// 테스트 22 〉	통과 (2.29ms, 30MB)
// 테스트 23 〉	통과 (6.58ms, 33.4MB)
// 테스트 24 〉	통과 (6.21ms, 33.3MB)
// 테스트 25 〉	통과 (5.57ms, 33MB)
// 테스트 26 〉	통과 (6.08ms, 33.2MB)
// 테스트 27 〉	통과 (2.29ms, 30.1MB)
// 테스트 28 〉	통과 (0.17ms, 29.7MB)


function solution(s) {
    if(s.length ==1 )return 1;
     const count = Math.floor(s.length / 2);
    const resAry = [];
    for (let idx = count; idx > 0; idx--) {
      let strLength = 1;
      let startIdx = 0;
      const strAry = [];
      while (true) {
        if (s.slice(startIdx, idx * strLength) != "") strAry.push(s.slice(startIdx, idx * strLength));
        startIdx = idx * strLength;
        strLength++;
        if (startIdx > s.length) break;
      }
      let resStr = "";
      let repeatCount = 0;
      let targetIdx = 0;
      for (let j = 0; j < strAry.length; j++) {
        if (strAry[targetIdx] == strAry[j]) repeatCount++;
        else {
          if (repeatCount == 0 || repeatCount == 1) {
            resStr += strAry[targetIdx];
          } else {
            resStr += repeatCount + strAry[targetIdx];
          }

          targetIdx = j;
          repeatCount = 1;
        }
      }

      if (repeatCount == 0 || repeatCount == 1) {
        resStr += strAry[targetIdx];
      } else {
        resStr += repeatCount + strAry[targetIdx];
      }

      resAry.push(resStr.length);
    }
    return Math.min.apply(null, resAry);
}