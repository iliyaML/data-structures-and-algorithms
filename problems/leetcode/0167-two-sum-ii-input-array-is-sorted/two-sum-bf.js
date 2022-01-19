/**
 * Brute Force Approach
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  // loop through all items in numbers
  for (let i = 0, l = numbers.length; i < l; ++i) {
    const num1 = numbers[i];

    // loop through all items in numbers
    for (let j = i + 1; j < l; ++j) {
      const num2 = numbers[j];

      // return if we have a match
      if (num1 + num2 === target) {
        return [i + 1, j + 1];
      }
    }
  }

  // if not found
  return [-1, -1];
};
