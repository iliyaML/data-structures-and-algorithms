export class Solution {
  /**
   * LintCode: 928
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   * @param s: a string
   * @return: the length of the longest substring T that contains at most 2 distinct characters
   */
  lengthOfLongestSubstringTwoDistinct(s) {
    let maxLen = 0;

    // key: character
    // val: frequency
    let myMap = new Map();

    // typical sliding window algorithm
    let start = 0;
    for (let end = 0, l = s.length; end < l; ++end) {
      myMap.set(s[end], (myMap.get(s[end]) || 0) + 1);

      // if we have more than 2 characters in the map
      while (myMap.size > 2) {
        // keep on deleting the character at the start
        myMap.set(s[start], myMap.get(s[start]) - 1);

        // delete the character from the map if frequency is zero
        if (myMap.get(s[start]) === 0) {
          myMap.delete(s[start]);
        }

        // move the start pointer
        ++start;
      }

      maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
  }
}
