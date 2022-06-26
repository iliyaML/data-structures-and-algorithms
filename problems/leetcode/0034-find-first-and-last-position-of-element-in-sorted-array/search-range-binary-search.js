/**
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  // call our helper functions to find the smallest index that obtains our target
  // and also the largest one
  return [findFirst(nums, target), findLast(nums, target)];
};

const findFirst = (nums, target) => {
  // set default answer
  let ans = -1;

  // typical binary search problem
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let test = nums[mid];

    if (test === target) {
      // if we found the target, update our answer
      ans = mid;

      // keep finding if there is a smaller value for ans
      end = mid - 1;
    } else if (test > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};

const findLast = (nums, target) => {
  // set default answer
  let ans = -1;

  // typical binary search problem
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let test = nums[mid];

    if (test === target) {
      // if we found the target, update our answer
      ans = mid;

      // keep finding if there is a smaller value for anss
      start = mid + 1;
    } else if (test > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};
