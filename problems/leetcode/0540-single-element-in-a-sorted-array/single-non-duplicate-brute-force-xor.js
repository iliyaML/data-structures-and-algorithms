/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  let xor = 0;

  for (let num of nums) {
    xor ^= num;
  }

  return xor;
};
