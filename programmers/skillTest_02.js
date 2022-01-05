// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가
// 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의
//  숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 수 ≤ 9
// numbers의 모든 수는 서로 다릅니다.

// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 30.1MB)
// 테스트 2 〉	통과 (0.04ms, 30MB)
// 테스트 3 〉	통과 (0.04ms, 30.2MB)
// 테스트 4 〉	통과 (0.04ms, 30.2MB)
// 테스트 5 〉	통과 (0.04ms, 30.2MB)
// 테스트 6 〉	통과 (0.04ms, 30.4MB)
// 테스트 7 〉	통과 (0.07ms, 30.3MB)
// 테스트 8 〉	통과 (0.04ms, 30.3MB)
// 테스트 9 〉	통과 (0.04ms, 30.2MB)
// 채점 결과
// 정확성: 50.0
// 효율성: 0.0
// 합계: 50.0 / 50

function solution(numbers) {
  let answer = 0;
  for (let idx = 0; idx <= 9; idx++) {
    if (numbers.includes(idx) == false) answer += idx;
  }
  return answer;
}
