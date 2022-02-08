/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const mySet = new Set();
  for (let i = 0, l = nums.length; i < l; ++i) {
    if (mySet.has(nums[i])) {
      return true;
    }
    mySet.add(nums[i]);
  }

  return false;
};

// unoptimized approach
// const containsDuplicate = (nums) => (new Set(nums)).size !== nums.length;
