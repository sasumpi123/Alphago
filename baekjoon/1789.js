// sasumpi123	1789	맞았습니다!!	11788	204	node.js / 수정	246

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let i = 1;
  let sum = 0;
  while (sum <= input) {
    sum += i;
    i++;
  }
  return i - 2;
}

console.log(solution(input));
