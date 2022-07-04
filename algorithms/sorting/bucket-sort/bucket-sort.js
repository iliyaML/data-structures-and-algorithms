/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {*} nums
 * @returns
 */
const bucketSort = (nums) => {
  // create a new array of size (max of nums + 1)
  // initialize to zero
  const arr = new Array(Math.max(...nums) + 1).fill(0);

  // count the occurences of the number
  // index: number
  // value: occurences of the number
  for (let num of nums) {
    ++arr[num];
  }

  // update our nums array in-place
  let index = 0;
  for (let i = 0, l = arr.length; i < l; ++i) {
    // if we have at least one occurence
    if (arr[i] !== 0) {
      for (let x = 0; x < arr[i]; ++x) {
        nums[index] = i;

        // move our pointer
        ++index;
      }
    }
  }
};

let nums = [3, 2, 1, 4, 5, 6, 7, 9, 3];
console.log("Original:", nums);
bucketSort(nums);
console.log("Sorted:", nums);
