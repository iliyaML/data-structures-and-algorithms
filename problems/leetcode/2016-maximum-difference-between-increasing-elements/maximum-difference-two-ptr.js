/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Similar to best time to buy and sell stock
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = (nums) => {
  // ensured to have at least two elements in nums
  let left = 0;
  let right = 1;
  let l = nums.length;
  let maxDiff = nums[right] - nums[left];

  // loop until right exceeds total nums
  while (right < l) {
    // is the difference between right and left positive?
    if (nums[right] > nums[left]) {
      // if so, calculate the difference
      let difference = nums[right] - nums[left];
      // update our answer if it is greater
      maxDiff = Math.max(maxDiff, difference);
    } else {
      // if the difference is not positive
      // nums at right is pointing at a low number
      // update our left pointer to be at right
      left = right;
    }
    // always move our right pointers
    ++right;
  }

  // if the difference is not positive, return -1
  // otherwise return our answer
  return maxDiff > 0 ? maxDiff : -1;
};
