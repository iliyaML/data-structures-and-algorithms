/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = (colors) => {
  let l = colors.length;
  let start = 0;
  let end = colors.length - 1;

  // update our end pointer until we meet the first color
  // from the end that is not the same as the color at the
  // start
  while (colors[0] === colors[end]) {
    --end;
  }

  // update our start pointer until we meet the first color
  // from the start that is not the same as the color at the
  // end
  while (colors[start] === colors[l - 1]) {
    ++start;
  }

  // compare the distance between the two pointers
  // (l-1) - start
  // (end) - 0
  // choose the bigger distance
  return Math.max(l - 1 - start, end);
};
