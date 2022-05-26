/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  if (num === 0) {
    return 0;
  }
  return num % 9 === 0 ? 9 : num % 9;
};
