/**
 * m = # of elements in nums1
 * n = # of elements in nums2
 * Time Complexity: O((m + n) log (m + n)), due to sorting
 * Space Complexity: O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const result = [];
  // add items from nums1 and nums2 into our result array
  for (let num of nums1) {
    result.push(num);
  }

  for (let num of nums2) {
    result.push(num);
  }

  // shorthand:
  // const result = nums1.concat(nums2);
  // or:
  // const result = [...nums1, ...nums2];

  // sort the result array in ascending order
  result.sort((a, b) => a - b);

  const len = result.length;

  // return the median
  if (len % 2 === 0) {
    // if result length is even
    return (result[Math.floor(len / 2)] + result[Math.floor(len / 2) - 1]) / 2;
  }

  // if result length is odd, return the item in the middle index
  return result[Math.floor(len / 2)];
};
