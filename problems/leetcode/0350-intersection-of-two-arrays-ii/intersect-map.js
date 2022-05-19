/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(max(m, n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  // key: num
  // val: frequency
  let myMap = new Map();

  // process the first array, nums1
  for (let i = 0, l = nums1.length; i < l; ++i) {
    myMap.set(nums1[i], (myMap.get(nums1[i]) || 0) + 1);
  }

  // process the second array, nums2
  let results = [];
  for (let i = 0, l = nums2.length; i < l; ++i) {
    // if we have the number in our map and is greater than 1
    // we include it in our results and decrement the frequency
    if (myMap.get(nums2[i]) > 0) {
      results.push(nums2[i]);
      myMap.set(nums2[i], myMap.get(nums2[i]) - 1);
    }
  }

  return results;
};
