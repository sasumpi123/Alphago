function factorial(n) {
  if (n === 1) {
    // Base case, Termination case
    return 1;
  }
  console.error(n);
  return n * factorial(n - 1);
}

factorial(5);

// 문자열이 거꾸로 읽어도 동일한지 여부를 재귀적으로 결정하는 프로그램 작성하기
function isPalindrome(str) {
  return palindrome(str, 0, str.length - 1);
}

function palindrome(str, startIdx, endIdx) {
  const isEnd = startIdx >= endIdx;
  if (isEnd) return true;

  if (str.charAt(startIdx) !== str.charAt(endIdx)) {
    return false;
  } else {
    return palindrome(str, startIdx + 1, endIdx - 1);
  }
}

console.error("accca : ", isPalindrome("accca"));
