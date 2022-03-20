// Time Complexity: O(n^2)
// Space Complexity: O(1)
const bubbleSort = (nums) => {
  let len = nums.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (nums[i] > nums[i + 1]) {
        let tmp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return nums;
};
