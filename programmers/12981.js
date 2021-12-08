// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 30.2MB)
// 테스트 2 〉	통과 (0.10ms, 29.8MB)
// 테스트 3 〉	통과 (0.07ms, 30.3MB)
// 테스트 4 〉	통과 (0.11ms, 30.2MB)
// 테스트 5 〉	통과 (0.09ms, 30.4MB)
// 테스트 6 〉	통과 (0.08ms, 30MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.06ms, 30.2MB)
// 테스트 9 〉	통과 (0.12ms, 30.2MB)
// 테스트 10 〉	통과 (0.12ms, 30.3MB)
// 테스트 11 〉	통과 (0.11ms, 30.4MB)
// 테스트 12 〉	통과 (0.08ms, 29.9MB)
// 테스트 13 〉	통과 (0.07ms, 30.3MB)
// 테스트 14 〉	통과 (0.12ms, 30.4MB)
// 테스트 15 〉	통과 (0.10ms, 30.3MB)
// 테스트 16 〉	통과 (0.08ms, 30.1MB)
// 테스트 17 〉	통과 (0.12ms, 30.5MB)
// 테스트 18 〉	통과 (0.11ms, 30.2MB)
// 테스트 19 〉	통과 (0.09ms, 30.4MB)
// 테스트 20 〉	통과 (0.14ms, 30.2MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(n, words) {
  let startWord = words[0][0];
  let memberNum = 1;
  let loopNum = 0;
  const useWords = [];
  for (let idx = 0; idx < words.length; idx++) {
    if (useWords.includes(words[idx]) || words[idx].charAt(0) != startWord) {
      return [memberNum, ++loopNum];
    }
    startWord = words[idx].charAt(words[idx].length - 1);
    useWords.push(words[idx]);

    if (memberNum % n == 0) {
      memberNum = 1;
      loopNum++;
      continue;
    }
    memberNum++;
  }

  return [0, 0];
}
