// 테스트 1 〉	통과 (0.06ms, 30.3MB)
// 테스트 2 〉	통과 (0.12ms, 30.3MB)
// 테스트 3 〉	통과 (0.09ms, 30MB)
// 테스트 4 〉	통과 (0.18ms, 30.1MB)
// 테스트 5 〉	통과 (0.40ms, 30.2MB)
// 테스트 6 〉	통과 (5.89ms, 33.2MB)
// 테스트 7 〉	통과 (11.74ms, 34.2MB)
// 테스트 8 〉	통과 (12.93ms, 35.1MB)
// 테스트 9 〉	통과 (27.91ms, 49.8MB)
// 테스트 10 〉	통과 (31.05ms, 45.2MB)
// 테스트 11 〉	통과 (0.07ms, 30.4MB)
// 테스트 12 〉	통과 (0.06ms, 30.3MB)

function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < number[i]) {
      if (k <= 0) break;
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  if (stack.length != number.length - k) {
    stack.splice(stack.length - k, k);
  }

  return stack.join("");
}
