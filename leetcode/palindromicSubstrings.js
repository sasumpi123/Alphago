// Runtime: 96 ms, faster than 65.73% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 39.5 MB, less than 64.33% of JavaScript online submissions for Palindromic Substrings.

const countSubstrings = function (s) {
  let count = 0;
  for (let idx = 0; idx < s.length; idx++) {
    count += palindromic(s, idx, idx);
    count += palindromic(s, idx, idx + 1);
  }

  return count;
};
const palindromic = (s, i, j) => {
  let count = 0;

  while (i >= 0 && j < s.length) {
    if (s.charAt(i) != s.charAt(j)) {
      break;
    }
    count++;

    i--;
    j++;
  }

  return count;
};
