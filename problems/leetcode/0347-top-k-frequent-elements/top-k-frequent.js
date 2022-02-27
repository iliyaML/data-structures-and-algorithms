/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  // map to store
  // key: num
  // value: frequency
  let myMap = new Map();

  // iterate through all the numbers and populate our map
  for (let num of nums) {
    myMap.set(num, myMap.has(num) ? myMap.get(num) + 1 : 1);
  }

  // create an array of size nums
  // index: frequency
  // value: list of nums
  let arr = new Array(nums.length);

  // iterate through the map and update the array
  for (let [num, frequency] of myMap) {
    if (arr[frequency]) {
      arr[frequency].push(num);
    } else {
      arr[frequency] = [num];
    }
  }

  // our final result array
  let result = [];

  // loop through our array from the end
  // as that is where the frequency is the greatest
  for (let i = arr.length - 1; i >= 0; --i) {
    // if we have a number for that frequency
    if (arr[i]) {
      // add the numbers until our result length reaches k
      for (let j = 0, l = arr[i].length; j < l; ++j) {
        if (result.length === k) {
          return result;
        }
        result.push(arr[i][j]);
      }
    }
  }

  return result;
};
