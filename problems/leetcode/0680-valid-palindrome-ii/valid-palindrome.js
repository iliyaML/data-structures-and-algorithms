/**
 * Time Complexity: O()
 * Space Complexity: O()
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  let i = 0,
    j = s.length - 1;

  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      return _validPalindrome(s, i + 1, j) || _validPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }

  return true;
};

const _validPalindrome = (s, i, j) => {
  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};
