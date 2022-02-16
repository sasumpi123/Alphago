function solution(n, arr1, arr2) {
  const answer = [];

  for (let aryIdx = 0; aryIdx < arr1.length; aryIdx++) {
    const binaryNumArr1 = getCompareStr(arr1[aryIdx], n);
    const binaryNumArr2 = getCompareStr(arr2[aryIdx], n);
    let tempStr = "";
    for (let strIdx = 0; strIdx < n; strIdx++) {
      const isWall = binaryNumArr1[strIdx] == 1 || binaryNumArr2[strIdx] == 1;
      if (isWall) tempStr = tempStr + "#";
      else tempStr = tempStr + " ";
    }
    answer.push(tempStr);
  }
  return answer;
}

function getCompareStr(num, n) {
  let tempStr = num.toString(2);
  if (tempStr.length < n) {
    const count = n - tempStr.length;

    for (let idx = 0; idx < count; idx++) {
      tempStr = "0" + tempStr;
    }
  }
  return tempStr;
}

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
