/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let single = 0;
  // perform bitwise operation on all the number in nums
  // since they have duplicates, they all will cancel out
  // leaving only the single number
  for (let num of nums) {
    single ^= num;
  }
  return single;
};
