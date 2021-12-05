/**
 * Use a map / hash table
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // create a map to store value and index
  const myMap = new Map();

  for (let i = 0, l = nums.length; i < l; ++i) {
    let diff = target - nums[i];

    // if the difference exists in the map, return the index
    if (myMap.has(diff)) {
      return [i, myMap.get(diff)];
    } else {
      // add the value as the key, and the index as the value
      myMap.set(nums[i], i);
    }
  }

  // return empty array if no solution is found
  return [];
};
