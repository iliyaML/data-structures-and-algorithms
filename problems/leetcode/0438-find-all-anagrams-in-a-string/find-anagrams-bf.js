/**
 * Brute Force Method
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const result = [];
  const pLen = p.length;
  const sLen = s.length;

  if (pLen > sLen) {
    return result;
  }

  const mySet = new Set([...p]);

  let i = 0;

  while (i < sLen) {
    if (mySet.has(s.charAt(i))) {
      if (_isAnagram(s.substr(i, pLen), p)) {
        result.push(i);
      }
    }
    ++i;
  }

  return result;
};

const _isAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const arr = new Array(26).fill(0);

  for (let i = 0, l = s1.length; i < l; ++i) {
    ++arr[s1.charCodeAt(i) - "a".charCodeAt(0)];
    --arr[s2.charCodeAt(i) - "a".charCodeAt(0)];
  }

  for (let value of arr) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};
