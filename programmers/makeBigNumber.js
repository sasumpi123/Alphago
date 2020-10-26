// 10번 타임초과..
// function solution() {
//   let number = "9991";
//   // let resNumber = new StringBuilder();
//   // resNumber.Append(number);
//   const k = 2;
//   const resLength = number.length - k;
//   let index = 0;

//   for (let i = 0; i < k; i++) {
//     if (index < 0) index = 0;
//     while (true) {
//       if (number.charAt(index) < number.charAt(index + 1)) {
//         number = number.replace(number.substr(index, 1), "");

//         index--;
//         break;
//       }
//       if (index == number.length - 1) break;
//       index++;
//     }
//   }

//   if (number.length != resLength) {
//     for (let i = 0; i <= number.length - resLength; i++) {
//       number = number.replace(number.substr(number.length - 1, 1), "");
//     }
//   }
//   // console.log(resNumber.buffer[0]);
//   return number;
// }

// 테스트 1 〉	통과 (0.08ms, 30.1MB)
// 테스트 2 〉	통과 (0.11ms, 30.1MB)
// 테스트 3 〉	통과 (0.13ms, 29.9MB)
// 테스트 4 〉	통과 (0.31ms, 30.2MB)
// 테스트 5 〉	통과 (0.44ms, 30MB)
// 테스트 6 〉	통과 (5.53ms, 33.2MB)
// 테스트 7 〉	통과 (7.46ms, 33.8MB)
// 테스트 8 〉	통과 (10.53ms, 35.1MB)
// 테스트 9 〉	통과 (27.51ms, 49.9MB)
// 테스트 10 〉	통과 (30.75ms, 44.9MB)
// 테스트 11 〉	통과 (0.08ms, 30MB)
// 테스트 12 〉	통과 (0.08ms, 30MB)
function solution() {
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
