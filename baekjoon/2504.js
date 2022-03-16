// 40540819	sasumpi123	2504	맞았습니다!!	9596	168	node.js / 수정	982

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (str) => {
  const stack = [];
  let answer = 0;
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
      case "[":
        stack.push(str[i]);
        const targetNum = str[i] === "(" ? 2 : 3;
        num *= targetNum;
        break;
      case ")":
        if (stack.length === 0) return 0;
        if (stack.pop() === "(") {
          if (str[i - 1] === "(") {
            answer += num;
          }
          num /= 2;
        } else {
          return 0;
        }
        break;
      case "]":
        if (stack.length === 0) return 0;
        if (stack.pop() === "[") {
          if (str[i - 1] === "[") {
            answer += num;
          }
          num /= 3;
        } else {
          return 0;
        }
        break;
    }
  }
  if (stack.length !== 0) return 0;
  return answer;
};

console.log(solution(input));
