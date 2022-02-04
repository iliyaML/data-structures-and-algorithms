/**
 * Brute Force Approach
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  let maxLen = 0;

  // outer loop to go through all the items
  for (let i = 0, l = nums.length; i < l; ++i) {
    let zeroes = 0;
    let ones = 0;

    // inner loop to go through the remaining items starting from i
    for (let x = i; x < l; ++x) {
      // increment zeroes or ones count
      if (nums[x] === 0) {
        ++zeroes;
      } else {
        ++ones;
      }

      // update our maxLen
      if (zeroes === ones) {
        // find the distance between x and i
        // add 1 to account for length
        maxLen = Math.max(maxLen, x - i + 1);
      }
    }
  }

  return maxLen;
};
