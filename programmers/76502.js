// 테스트 1 〉	통과 (26.58ms, 33.9MB)
// 테스트 2 〉	통과 (6.54ms, 33.2MB)
// 테스트 3 〉	통과 (25.57ms, 33.7MB)
// 테스트 4 〉	통과 (26.08ms, 33.9MB)
// 테스트 5 〉	통과 (14.98ms, 33.7MB)
// 테스트 6 〉	통과 (9.32ms, 33.7MB)
// 테스트 7 〉	통과 (11.80ms, 33.5MB)
// 테스트 8 〉	통과 (14.71ms, 33.6MB)
// 테스트 9 〉	통과 (21.50ms, 34MB)
// 테스트 10 〉	통과 (24.17ms, 34.3MB)
// 테스트 11 〉	통과 (25.51ms, 34.3MB)
// 테스트 12 〉	통과 (0.03ms, 30.3MB)
// 테스트 13 〉	통과 (0.05ms, 30.1MB)
// 테스트 14 〉	통과 (0.07ms, 30MB)

function solution(s) {
  let answer = 0;
  const strLength = s.length;

  for (let i = 0; i < strLength; i++) {
    s = s.concat(s[0]).slice(1, strLength + 1);
    if (isValidStr(s)) answer++;
  }
  return answer;
}
function isValidStr(str) {
  const stack = [];
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "[" || str[j] === "{" || str[j] === "(") {
      stack.push(str[j]);
    }
    if (str[j] === "]") {
      if (stack[stack.length - 1] == "[") stack.pop();
      else return false;
    }
    if (str[j] === "}") {
      if (stack[stack.length - 1] == "{") stack.pop();
      else return false;
    }
    if (str[j] === ")") {
      if (stack[stack.length - 1] == "(") stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}

solution("[](){}");
