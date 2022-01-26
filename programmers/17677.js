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
