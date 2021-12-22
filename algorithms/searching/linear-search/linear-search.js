/**
 * Time Complexity: O(n), size of the input
 * Space Complexity: O(1)
 * @param {*} arr
 * @param {*} target
 * @returns
 */
const linearSearch = (arr, target) => {
  // loop through the entire array
  for (let i = 0, l = arr.length; i < l; ++i) {
    // return true if target is found
    if (arr[i] === target) {
      return i;
    }
  }
  // if we've exited the loop, means we didn't find the target
  return -1;
};

let nums = [1, 3, 5, 7, 8, 9];
console.log(linearSearch(nums, 100)); // -1
console.log(linearSearch(nums, 9)); // 5
