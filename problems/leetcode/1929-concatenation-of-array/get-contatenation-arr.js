/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = (nums) => {
  const oriLength = nums.length;

  // allocate new array 2x of original size
  let arr = new Array(oriLength * 2);

  // loop up to original length
  for (let i = 0; i < oriLength; ++i) {
    arr[i] = nums[i];

    // at the same time, update the value at i offset by original length
    arr[i + oriLength] = nums[i];
  }

  return arr;
};
