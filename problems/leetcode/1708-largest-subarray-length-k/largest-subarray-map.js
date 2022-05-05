export class Solution {
  /**
   * LintCode: 911
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   * @param nums: an array
   * @param k: a target value
   * @return: the maximum length of a subarray that sums to k
   */
  maxSubArrayLen(nums, k) {
    // key: sum
    // val: index, i
    const myMap = new Map();
    let maxLen = 0;
    let sum = 0;

    // process all items in nums
    for (let i = 0, l = nums.length; i < l; ++i) {
      sum += nums[i];

      // if sum is equal to k, update maxLen (add 1 to change to length)
      if (sum == k) {
        maxLen = i + 1;
      }

      // if sum is not present in map, set sum as key and index as val
      if (!myMap.has(sum)) {
        myMap.set(sum, i);
      }

      // check if sum-k key exists
      if (myMap.has(sum - k)) {
        // update maxLength
        maxLen = Math.max(maxLen, i - myMap.get(sum - k));
      }
    }

    return maxLen;
  }
}
