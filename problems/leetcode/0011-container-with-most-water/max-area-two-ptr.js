/**
 * Time Complexity: O(n), two pointers
 * Space Complexity: O(1)
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let result = 0;

  // initialize our two pointers
  let left = 0;
  let right = height.length - 1;

  // iterate until left meets right
  while (left < right) {
    // compute the area
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    const area = w * h;

    // update result with maximum value
    result = Math.max(result, area);

    // update the pointers
    // change pointer which has the smaller height
    if (height[left] < height[right]) {
      ++left;
    } else {
      --right;
    }
  }

  return result;
};
