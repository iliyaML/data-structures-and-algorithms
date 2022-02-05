/**
 * Time Complexity: O(n^2), nested loops overshadows sort
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const result = [];

  // sort the nums array in increasing order
  nums.sort(function (a, b) {
    return a - b;
  });

  // loop through all the elements
  for (let i = 0, l = nums.length; i < l; ++i) {
    // don't want to reuse the same value twice,
    // so we skip if they are the same
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let num1 = nums[i];

    // below is basically a two sum problem (sorted)
    // calculate the remaining sum
    let twoSum = 0 - num1;

    // initialize the two pointers
    let start = i + 1;
    let end = l - 1;

    while (start < end) {
      let num2 = nums[start];
      let num3 = nums[end];

      let ourSum = num2 + num3;

      if (ourSum < twoSum) {
        ++start;
      } else if (ourSum > twoSum) {
        --end;
      } else {
        let ans = [num1, num2, num3];
        result.push(ans);

        // make sure to update our pointers
        ++start;

        // ensure that we don't use the same start
        while (nums[start] === nums[start - 1] && start < end) {
          ++start;
        }
      }
    }
  }

  return result;
};
