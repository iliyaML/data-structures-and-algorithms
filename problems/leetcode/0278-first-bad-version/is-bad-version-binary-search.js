/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    // assume answer as n
    let answer = n;

    // binary search approach
    let start = 1;
    let end = n;
    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);

      // evaluate the result at the middle
      let result = isBadVersion(mid);
      if (result === false) {
        // shrink the search space
        start = mid + 1;
      } else if (result === true) {
        // we found an answer, store it for now
        answer = mid;

        // try searching for an earlier version if it exists
        end = mid - 1;
      }
    }

    return answer;
  };
};
