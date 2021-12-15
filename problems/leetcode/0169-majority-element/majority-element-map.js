/**
 * Use a map to store the number as the key and the frequency as the value
 * Assume the input array has at least one element
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const myMap = new Map();

  // assume the majority number is the first element
  let majorityNumber = nums[0];
  let highestFrequency = 1;

  for (let i = 0, l = nums.length; i < l; ++i) {
    let num = nums[i];

    // update our map
    myMap.set(num, (myMap.get(num) || 0) + 1);

    // update our highest frequency and majority number
    if (myMap.get(num) > highestFrequency) {
      highestFrequency = myMap.get(num);
      majorityNumber = num;
    }
  }

  return majorityNumber;
};
