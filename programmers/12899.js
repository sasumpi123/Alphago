// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 30MB)
// 테스트 2 〉	통과 (0.06ms, 30.2MB)
// 테스트 3 〉	통과 (0.07ms, 30.1MB)
// 테스트 4 〉	통과 (0.06ms, 30.1MB)
// 테스트 5 〉	통과 (0.06ms, 29.9MB)
// 테스트 6 〉	통과 (0.07ms, 30.1MB)
// 테스트 7 〉	통과 (0.06ms, 30.1MB)
// 테스트 8 〉	통과 (0.07ms, 30.2MB)
// 테스트 9 〉	통과 (0.07ms, 29.9MB)
// 테스트 10 〉	통과 (0.06ms, 30MB)
// 테스트 11 〉	통과 (0.05ms, 30.1MB)
// 테스트 12 〉	통과 (0.06ms, 30.2MB)
// 테스트 13 〉	통과 (0.07ms, 30MB)
// 테스트 14 〉	통과 (0.05ms, 30.1MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.06ms, 30.1MB)
// 테스트 2 〉	통과 (0.07ms, 30MB)
// 테스트 3 〉	통과 (0.08ms, 30.1MB)
// 테스트 4 〉	통과 (0.08ms, 30.2MB)
// 테스트 5 〉	통과 (0.06ms, 30.1MB)
// 테스트 6 〉	통과 (0.07ms, 30.2MB)

function solution(n) {
    let answer = "";
    let mod = 0;
    let numAry = ["4", "1", "2"];

    while (n > 0) {
      mod = n % 3;
      
      n = parseInt(n / 3);
      if (mod == 0) {
        n = n - 1;
      }      
      answer =   numAry[mod]+answer ;
    }    
    return answer;
}

