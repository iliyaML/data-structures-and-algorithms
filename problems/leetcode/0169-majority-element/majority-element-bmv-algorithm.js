/**
 * Boyer-Moore Voting Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  // assume major element is the first element and set count to 1
  let majorElem = nums[0];
  let count = 1;

  // go through 2nd element till the end
  for (let i = 1, l = nums.length; i < l; ++i) {
    if (nums[i] !== majorElem) {
      // if current number is not equal to major element
      if (count > 1) {
        // we decrement count
        --count;
      } else {
        // if count is zero, we change the majority element to the current element
        // and reset count to 1
        majorElem = nums[i];
        count = 1;
      }
    } else {
      // keep incrementing count if we keep seeing the same major element
      ++count;
    }
  }

  return majorElem;
};
