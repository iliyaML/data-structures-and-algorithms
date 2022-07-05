/**
 * Time Complexity: O(log n), binary search
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (
      // if mid is even, duplicate should be in the following index (odd)
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      // if mid is odd, duplicate should be in the previous index (even)
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])
    ) {
      // if so, the even odd pattern is still satisfied, we search in the right half
      start = mid + 1;
    } else {
      // pattern has been broken, we focus on the left half
      end = mid;
    }
  }

  return nums[start];
};
