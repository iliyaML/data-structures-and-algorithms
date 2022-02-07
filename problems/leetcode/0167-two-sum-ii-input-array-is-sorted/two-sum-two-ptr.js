/**
 * Solve using two pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let firstPtr = 0;
  let lastPtr = numbers.length - 1;

  // loop until firstPtr meets lastPtr
  while (firstPtr < lastPtr) {
    // calculate the sum
    let sumOfNumbers = numbers[firstPtr] + numbers[lastPtr];

    // if the sum is less than target, we increase firstPtr
    if (sumOfNumbers < target) {
      ++firstPtr;
    } else if (sumOfNumbers > target) {
      // if the sum is greater than target, we decrease lastPtr
      --lastPtr;
    } else {
      // if it is equal to target, return the indices
      return [firstPtr + 1, lastPtr + 1];
    }
  }

  // if not found
  return [-1, -1];
};
