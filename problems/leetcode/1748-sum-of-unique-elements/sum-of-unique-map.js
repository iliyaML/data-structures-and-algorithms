/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
  // key: number
  // val: frequency
  const myMap = new Map();
  let sum = 0;

  // go through each number in nums
  for (let num of nums) {
    // update our map
    myMap.set(num, (myMap.get(num) || 0) + 1);

    // add to our sum if the frequency is 1
    if (myMap.get(num) === 1) {
      sum += num;
    } else if (myMap.get(num) === 2) {
      // if we ever reach frequency 2, we subtract it again
      sum -= num;
    }
  }

  return sum;
};
