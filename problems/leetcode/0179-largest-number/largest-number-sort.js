/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  nums.sort(function (num1, num2) {
    // sort it using a comparator function
    if (`${num1}${num2}` > `${num2}${num1}`) {
      // if -1, num1 will be placed before num2 in the array
      return -1;
    } else {
      return 1;
    }
  });

  // edge case, to eliminate leading zeroes
  if (nums[0] === 0) {
    return "0";
  }

  // otherwise, return the string version of the array
  return nums.join("");
};
