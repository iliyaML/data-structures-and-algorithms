/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  // k is unbounded, so we do this
  k = k % nums.length;

  // reverse the whole nums array
  _reverse(nums);

  // then reverse the first k elements in the array
  _reverse(nums, 0, k - 1);

  // then reverse the remaining elements in the array
  _reverse(nums, k, nums.length - 1);
};

// helper reverse function
const _reverse = (nums, left = 0, right = nums.length - 1) => {
  while (left < right) {
    // traditional swap
    let tmp = nums[left];
    nums[left] = nums[right];
    nums[right] = tmp;
    // fancy one liner
    // [nums[left], nums[right]] = [nums[right], nums[left]];
    ++left;
    --right;
  }
};
