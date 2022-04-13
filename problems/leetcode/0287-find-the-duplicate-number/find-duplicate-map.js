/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  // key: num
  // val: boolean
  const myMap = new Map();
  for (let i = 0, l = nums.length; i < l; ++i) {
    // if the number is already in our map
    // return the number (we found the duplicate)
    if (myMap.has(nums[i])) {
      return nums[i];
    }

    // otherwise, set it in our map
    myMap.set(nums[i], true);
  }

  // if we don't find anything
  return -1;
};
