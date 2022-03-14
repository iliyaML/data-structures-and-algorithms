/**
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  // sort the nums array
  // to handle duplicates

  // be careful, default sort in javascript will result in string sort
  // so must specify comparator function
  nums.sort(function (a, b) {
    return a - b;
  });

  // return values
  let results = [];
  let quad = [];

  // call recursive function to solve for kSum
  // k = 4
  _kSum(4, nums, 0, target, results, quad);

  return results;
};

const _kSum = (k, nums, start, target, results, quad) => {
  if (k !== 2) {
    for (let i = start; i < nums.length - k + 1; ++i) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      quad.push(nums[i]);
      _kSum(k - 1, nums, i + 1, target - nums[i], results, quad);
      quad.pop();
    }
    return;
  }

  // base case
  // basically two sum II

  // two pointer approach
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < target) {
      ++left;
    } else if (sum > target) {
      --right;
    } else {
      // got our result
      results.push([...quad, nums[left], nums[right]]);
      // still need to update our pointers to prevent an infinite loop
      ++left;
      while (left < right && nums[left] === nums[left - 1]) {
        ++left;
      }
    }
  }
};
