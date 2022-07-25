/**
 * Use a map / hash table
 * n = # of elements in nums
 * Time Complexity: O(n)
 * Space Complexity: O(n), use a map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // create a map to store value and index
  // key: number
  // val: index associated with the number
  const myMap = new Map();

  // go through each element in nums
  for (let i = 0, l = nums.length; i < l; ++i) {
    let diff = target - nums[i];

    // if the difference exists in the map, return the index
    if (myMap.has(diff)) {
      return [i, myMap.get(diff)];
    }
    // add the value as the key, and the index as the value
    myMap.set(nums[i], i);
  }

  // return invalid indices if not found
  return [-1, -1];
};
