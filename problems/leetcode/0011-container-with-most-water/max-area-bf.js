/**
 * Brute Force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let result = 0;
  // find all possible combinations
  for (let left = 0, l = height.length; left < l; ++left) {
    for (let right = left + 1; right < l; ++right) {
      // compute the area
      const w = right - left;
      const h = Math.min(height[left], height[right]);
      const area = w * h;

      // update result with maximum value
      result = Math.max(result, area);
    }
  }

  return result;
};
