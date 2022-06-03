/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  // convert both arrays to sets
  let set1 = new Set([...nums1]);
  let set2 = new Set([...nums2]);

  // find the difference in each sets
  let diff1 = [...set1].filter((element) => !set2.has(element));
  let diff2 = [...set2].filter((element) => !set1.has(element));

  return [diff1, diff2];
};
