/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  // create results output array of size nums
  // initialize all the values to 1
  let results = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0, l = nums.length; i < l; ++i) {
    results[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; --i) {
    results[i] *= postfix;
    postfix *= nums[i];
  }

  return results;
};
