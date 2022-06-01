/**
 * Time Complexity: O(m log m + n log n)
 * Space Complexity: O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  // sort both arrays in ascending order
  nums1.sort(function (a, b) {
    return a - b;
  });

  nums2.sort(function (a, b) {
    return a - b;
  });

  // initialize two pointers for both arrays
  let num1Ptr = 0;
  let num2Ptr = 0;

  let results = [];

  // iterate until one of the pointer goes out of bounds
  while (num1Ptr < nums1.length && num2Ptr < nums2.length) {
    // if we find a match, add that to our result and move both pointers
    if (nums1[num1Ptr] === nums2[num2Ptr]) {
      results.push(nums1[num1Ptr]);
      ++num1Ptr;
      ++num2Ptr;
    } else if (nums1[num1Ptr] < nums2[num2Ptr]) {
      // if num1 is smaller than num2, keep incrementing num1
      ++num1Ptr;
    } else if (nums1[num1Ptr] > nums2[num2Ptr]) {
      // if num2 is smaller than num1, keep incrementing num2
      ++num2Ptr;
    }
  }

  return results;
};
