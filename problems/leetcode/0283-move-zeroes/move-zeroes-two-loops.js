/**
 * First loop to write all the non-zeroes at the start of the array
 * Second for loop to write zeroes once all the non-zero numbers are filled in
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  // index to keep track of
  let index = 0;
  let l = nums.length;
  for (let i = 0; i < l; ++i) {
    // once we encounter a non-zero number
    if (nums[i] !== 0) {
      // replace the number at index with nums[i]
      // then move index to the next position
      nums[index] = nums[i];
      ++index;
    }
  }

  // at this point, all the positions up to index (excluding) are filled in
  // with non-zero numbers

  // now we can start at index, and write all the following
  // numbers to zero
  for (let i = index; i < l; ++i) {
    nums[i] = 0;
  }
};
