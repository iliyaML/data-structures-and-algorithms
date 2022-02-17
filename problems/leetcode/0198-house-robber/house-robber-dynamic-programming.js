/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;
  for (let i = 0, l = nums.length; i < l; ++i) {
    let temp = Math.max(rob1 + nums[i], rob2);

    // update our stored variables
    rob1 = rob2;
    rob2 = temp;
  }

  // return rob2 which is the max value
  return rob2;
};
