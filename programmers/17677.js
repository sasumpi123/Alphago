// 정확성  테스트
// 테스트 1 〉	통과 (0.39ms, 30.2MB)
// 테스트 2 〉	통과 (0.35ms, 30.2MB)
// 테스트 3 〉	통과 (0.36ms, 30.4MB)
// 테스트 4 〉	통과 (1.07ms, 30.4MB)
// 테스트 5 〉	통과 (0.37ms, 30.2MB)
// 테스트 6 〉	통과 (0.36ms, 30.3MB)
// 테스트 7 〉	통과 (0.48ms, 30.2MB)
// 테스트 8 〉	통과 (0.40ms, 30.3MB)
// 테스트 9 〉	통과 (0.44ms, 30.4MB)
// 테스트 10 〉	통과 (0.79ms, 30.3MB)
// 테스트 11 〉	통과 (0.77ms, 30.3MB)
// 테스트 12 〉	통과 (0.34ms, 30.3MB)
// 테스트 13 〉	통과 (0.41ms, 30.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(str1, str2) {
  const str1Ary = getCombStrAry(str1.toLowerCase());
  const str2Ary = getCombStrAry(str2.toLowerCase());

  const intersection = str1Ary.filter((e) => {
    if (str2Ary.includes(e)) {
      str2Ary.splice(str2Ary.indexOf(e), 1);
      return true;
    } else {
      str2Ary.includes(e);
    }
  }).length;

  const union = str1Ary.length + str2Ary.length;
  const res = Math.floor((intersection / union) * 65536);
  return union === 0 ? 65536 : res;
}

function getCombStrAry(str) {
  const strAry = [];
  const isEng = /^[a-z]*$/;
  for (const value of str) {
    if (strAry.length === 0) {
      strAry.push(value);
    } else {
      strAry[strAry.length - 1] = strAry[strAry.length - 1] + value;
      strAry.push(value);
    }
  }
  const resAry = strAry.filter((e) => {
    return isEng.test(e) && e.length === 2;
  });
  return resAry;
}

solution("FRANCE", "french");
