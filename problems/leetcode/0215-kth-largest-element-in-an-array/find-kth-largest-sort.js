/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  // sort the array in sorting order
  nums.sort(function (a, b) {
    return a - b;
  });

  // return the kth largest element
  return nums[nums.length - k];
};
