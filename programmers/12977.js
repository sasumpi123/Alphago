// 테스트 1 〉	통과 (4.69ms, 32.9MB)
// 테스트 2 〉	통과 (4.31ms, 32.8MB)
// 테스트 3 〉	통과 (0.55ms, 30.1MB)
// 테스트 4 〉	통과 (0.48ms, 30.3MB)
// 테스트 5 〉	통과 (3.10ms, 32.9MB)
// 테스트 6 〉	통과 (7.79ms, 33.1MB)
// 테스트 7 〉	통과 (0.38ms, 30.3MB)
// 테스트 8 〉	통과 (8.32ms, 32.8MB)
// 테스트 9 〉	통과 (3.27ms, 32.9MB)
// 테스트 10 〉	통과 (8.29ms, 33MB)
// 테스트 11 〉	통과 (0.12ms, 30.2MB)
// 테스트 12 〉	통과 (0.10ms, 29.9MB)
// 테스트 13 〉	통과 (0.15ms, 30.1MB)
// 테스트 14 〉	통과 (0.10ms, 30.3MB)
// 테스트 15 〉	통과 (0.12ms, 30.3MB)
// 테스트 16 〉	통과 (11.99ms, 33.1MB)
// 테스트 17 〉	통과 (2.62ms, 32.7MB)
// 테스트 18 〉	통과 (1.11ms, 30.1MB)
// 테스트 19 〉	통과 (0.12ms, 30.1MB)
// 테스트 20 〉	통과 (14.01ms, 33.3MB)
// 테스트 21 〉	통과 (16.81ms, 33.1MB)
// 테스트 22 〉	통과 (0.39ms, 30.2MB)
// 테스트 23 〉	통과 (0.06ms, 30.2MB)
// 테스트 24 〉	통과 (16.12ms, 32.8MB)
// 테스트 25 〉	통과 (12.29ms, 33.2MB)
// 테스트 26 〉	통과 (0.08ms, 30MB)

function solution(nums) {
  var answer = 0;
  let tempNum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    tempNum += nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      tempNum += nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        tempNum += nums[k];
        let isPrimeNumber = true;
        for (let idx = 2; idx <= tempNum / 2; idx++) {
          if (tempNum % idx == 0) {
            isPrimeNumber = false;
            break;
          }
        }

        if (isPrimeNumber) answer++;
        tempNum = nums[i] + nums[j];
      }
      tempNum = nums[i];
    }
    tempNum = 0;
  }
  return answer;
}

solution([1, 2, 7, 6, 4]);
