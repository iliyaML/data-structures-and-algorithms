/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
  // base case if string is empty
  if (s.length === 0) {
    return 0;
  }

  let count = 0;
  // replace all the recurring spaces with just a single space
  // and split the whole string
  for (let i = 0, l = s.replace(/[ ]+/g, " ").split(" ").length; i < l; ++i) {
    // if each item in the array is not empty
    // increment count
    if (arr[i].length > 0) {
      ++count;
    }
  }

  return count;
};
