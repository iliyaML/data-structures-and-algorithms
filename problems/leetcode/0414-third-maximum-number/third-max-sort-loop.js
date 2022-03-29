/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  // sort the array in sorting order
  nums.sort(function (a, b) {
    return a - b;
  });

  // get the max value of the array
  let max = nums[nums.length - 1];
  let prev = max;
  let k = 1;

  // loop from the end (largest) until the start
  for (let i = nums.length - 2; i >= 0 && k < 3; --i) {
    // if the current value is the same as previous, we skip it
    if (nums[i] === prev) {
      continue;
    } else {
      // otherwise, we increment k (num of distinct elements)
      // reassign prev
      ++k;
      prev = nums[i];

      // if we reach the third distinct element, immediately return it
      if (k === 3) {
        return nums[i];
      }
    }
  }

  // return the max value we found if we don't have k distinct elements
  return max;
};
