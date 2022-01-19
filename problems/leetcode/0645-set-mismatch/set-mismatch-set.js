/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = (nums) => {
  const myMap = new Set();
  let sumOfIntegersArr = (nums.length * (nums.length + 1)) / 2;
  let sum = 0;
  let duplicate = -1;
  for (let i = 0, l = nums.length; i < l; ++i) {
    if (myMap.has(nums[i])) {
      duplicate = nums[i];
    } else {
      myMap.set(nums[i], 1);
    }
    sum += nums[i];
  }
  let missing = sumOfIntegersArr - (sum - duplicate);

  return [duplicate, missing];
};
