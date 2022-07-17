/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {*} nums
 * @returns
 */
const insertionSort = (nums) => {
  for (let i = 1, l = nums.length; i < l; ++i) {
    let j = i - 1;
    let tmp = nums[i];
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j];
      --j;
    }
    nums[j + 1] = tmp;
  }
  return nums;
};

let arr = [10, 9, 7, 8, 2, 4, 5, 6];
console.log("Original:", arr);
console.log("Sorted:", insertionSort(arr));
