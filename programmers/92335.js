// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (9.90ms, 32.9MB)
// 테스트 2 〉	통과 (0.03ms, 30.5MB)
// 테스트 3 〉	통과 (0.04ms, 30.5MB)
// 테스트 4 〉	통과 (0.04ms, 30.6MB)
// 테스트 5 〉	통과 (0.04ms, 30.5MB)
// 테스트 6 〉	통과 (0.04ms, 30.7MB)
// 테스트 7 〉	통과 (0.04ms, 30.5MB)
// 테스트 8 〉	통과 (0.04ms, 30.5MB)
// 테스트 9 〉	통과 (0.04ms, 30.6MB)
// 테스트 10 〉	통과 (0.04ms, 30.5MB)
// 테스트 11 〉	통과 (0.05ms, 30.3MB)
// 테스트 12 〉	통과 (0.05ms, 30.5MB)
// 테스트 13 〉	통과 (0.09ms, 30.6MB)
// 테스트 14 〉	통과 (0.02ms, 30.6MB)
// 테스트 15 〉	통과 (0.02ms, 30.5MB)
// 테스트 16 〉	통과 (0.03ms, 30.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(n, k) {
  const targetStr = n.toString(k);
  var tempStr = "";
  var answer = 0;
  if (targetStr.includes("0") == false) return isPrimeNum(Number(targetStr)) ? 1 : 0;
  for (let idx = 0; idx < targetStr.length; idx++) {
    if (Number(targetStr[idx]) !== 0) {
      tempStr += targetStr[idx];
      const isLast = idx == targetStr.length - 1;
      if (isLast) {
        if (isPrimeNum(Number(tempStr))) {
          if (targetStr[idx - tempStr.length] == 0 || targetStr[idx - tempStr.length] == undefined) {
            answer++;
          }
        }
      }
    } else {
      if (isPrimeNum(Number(tempStr))) {
        if (targetStr[idx - tempStr.length - 1] == 0 || targetStr[idx - tempStr.length - 1] == undefined) {
          answer++;
        }
      }

      tempStr = "";
    }
  }
  return answer;
}
function isPrimeNum(num) {
  if (num <= 1 || Number(isNaN(num))) return false;

  for (let idx = 2; idx <= Math.sqrt(num); idx++) {
    if (num % idx == 0) return false;
  }
  return true;
}

solution(1100110011, 10);
