/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  // loop through all the numbers
  for (let i = 0, l = numbers.length; i < l; ++i) {
    // select a number as the first num
    let num1 = numbers[i];

    // perform binary search to get the second num
    let start = i + 1;
    let end = l - 1;

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);

      // our evaluated sum, compare this against target
      let sum = num1 + numbers[mid];
      if (sum === target) {
        return [i + 1, mid + 1];
      } else if (sum < target) {
        start = mid + 1;
      } else if (sum > target) {
        end = mid - 1;
      }
    }

    // if we don't find a sum that equal to our target, we move to the
    // next iteration of the for loop
  }

  return [-1, -1];
};
