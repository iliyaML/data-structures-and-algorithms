/**
 * Time Complexity: O()
 * Space Complexity: O()
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
  for (let i = 0, l = s.length; i < l; ++i) {
    let cleanedString = s.substring(0, i) + s.substring(i + 1, s.length);
    if (_validPalindrome(cleanedString)) {
      return true;
    }
  }

  return false;
};

const _validPalindrome = (str) => {
  let s = 0;
  let t = str.length - 1;
  while (s <= t) {
    if (str.charAt(s) == str.charAt(t)) {
      s++;
      t--;
    } else return false;
  }
  return true;
};
