// Time Complexity: O(n^2)
// Space Complexity: O(1)
const bubbleSort = (nums) => {
  for (let i = 0, l = nums.length; i < l; ++i) {
    for (let j = 0; j < l - i - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        // swap
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
};

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
bubbleSort(arr);
console.log(arr);
