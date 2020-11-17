// 테스트 1 〉	통과 (0.35ms, 29.9MB)
// 테스트 2 〉	통과 (0.53ms, 30.3MB)
// 테스트 3 〉	통과 (0.47ms, 30.1MB)
// 테스트 4 〉	통과 (0.42ms, 30.3MB)
// 테스트 5 〉	통과 (0.50ms, 30MB)
// 테스트 6 〉	통과 (0.35ms, 30.1MB)
// 테스트 7 〉	통과 (0.26ms, 30.2MB)
// 테스트 8 〉	통과 (0.10ms, 29.8MB)
// 테스트 9 〉	통과 (0.09ms, 30.1MB)
// 테스트 10 〉	통과 (0.29ms, 29.8MB)
// 테스트 11 〉	통과 (0.63ms, 30MB)
// 테스트 12 〉	통과 (0.15ms, 30MB)
// 테스트 13 〉	통과 (0.33ms, 30.1MB)
// 테스트 14 〉	통과 (0.56ms, 30MB)
// 테스트 15 〉	통과 (0.59ms, 29.9MB)
// 테스트 16 〉	통과 (0.08ms, 30.1MB)

function solution(citations) {
    citations.sort((a, b) => {
          return b - a;
        });
        let res = 0;
        if (citations[0] == 0) return citations[0];
        for (let idx = 0; idx < citations.length; idx++) {
          if (citations[idx] > idx) res++;
          else break;
        }
        return res;
    }