/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  // key: number
  // val: frequency
  const arr = new Array(101).fill(0);
  let sum = 0;

  // go through each number in nums
  for (let num of nums) {
    // update value of array
    ++arr[num];

    // add to our sum if the frequency is 1
    if (arr[num] === 1) {
      sum += num;
    } else if (arr[num] === 2) {
      // if we ever reach frequency 2, we subtract it again
      sum -= num;
    }
  }

  return sum;
};
