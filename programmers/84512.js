// 테스트 1 〉	통과 (3.23ms, 33.8MB)
// 테스트 2 〉	통과 (4.08ms, 33.4MB)
// 테스트 3 〉	통과 (3.38ms, 33.5MB)
// 테스트 4 〉	통과 (4.28ms, 33.4MB)
// 테스트 5 〉	통과 (3.20ms, 33.4MB)
// 테스트 6 〉	통과 (4.16ms, 33.5MB)
// 테스트 7 〉	통과 (4.07ms, 33.6MB)
// 테스트 8 〉	통과 (3.11ms, 33.3MB)
// 테스트 9 〉	통과 (3.50ms, 33.3MB)
// 테스트 10 〉	통과 (3.25ms, 33.3MB)
// 테스트 11 〉	통과 (3.17ms, 33.5MB)
// 테스트 12 〉	통과 (3.24ms, 33.2MB)
// 테스트 13 〉	통과 (3.46ms, 33.1MB)
// 테스트 14 〉	통과 (3.25ms, 33.6MB)
// 테스트 15 〉	통과 (3.42ms, 33.2MB)
// 테스트 16 〉	통과 (3.42ms, 33.3MB)
// 테스트 17 〉	통과 (3.28ms, 33.5MB)
// 테스트 18 〉	통과 (3.55ms, 33.6MB)
// 테스트 19 〉	통과 (3.21ms, 33.4MB)
// 테스트 20 〉	통과 (3.27ms, 33.2MB)
// 테스트 21 〉	통과 (4.18ms, 33.4MB)
// 테스트 22 〉	통과 (3.58ms, 32.8MB)
// 테스트 23 〉	통과 (3.47ms, 33.1MB)
// 테스트 24 〉	통과 (3.35ms, 33.5MB)
// 테스트 25 〉	통과 (3.37ms, 33.6MB)
// 테스트 26 〉	통과 (3.23ms, 33MB)
// 테스트 27 〉	통과 (3.29ms, 33.2MB)
// 테스트 28 〉	통과 (3.21ms, 33.1MB)
// 테스트 29 〉	통과 (3.28ms, 33.5MB)
// 테스트 30 〉	통과 (3.18ms, 33.1MB)
// 테스트 31 〉	통과 (3.37ms, 33.5MB)
// 테스트 32 〉	통과 (4.01ms, 33.4MB)
// 테스트 33 〉	통과 (3.32ms, 33.3MB)
// 테스트 34 〉	통과 (3.35ms, 33.7MB)
// 테스트 35 〉	통과 (3.24ms, 33.6MB)
// 테스트 36 〉	통과 (3.27ms, 33.6MB)
// 테스트 37 〉	통과 (3.14ms, 33MB)
// 테스트 38 〉	통과 (4.18ms, 33MB)
// 테스트 39 〉	통과 (3.21ms, 33.2MB)
// 테스트 40 〉	통과 (3.30ms, 33.7MB)

function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  const getDictionary = (currentWord, depth) => {
    if (depth === 6) return;
    dictionary.push(currentWord);
    for (const nextWord of words) {
      getDictionary(currentWord + nextWord, depth + 1);
    }
  };

  words.forEach((word) => {
    getDictionary(word, 1);
  });

  return dictionary.indexOf(word) + 1;
}
