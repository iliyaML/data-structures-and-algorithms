/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let answer = Infinity;
  for (let i = 0, l = nums.length; i < l; ++i) {
    answer = Math.min(answer, nums[i]);
  }
  return answer;
};
