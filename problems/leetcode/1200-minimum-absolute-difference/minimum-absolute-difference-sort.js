/**
 * Time Complexity: O(n log n), due to sorting
 * Space Complexity: O(1)
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = (arr) => {
  // sort the array in ascending order
  arr.sort((a, b) => a - b);

  // guaranteed to have at least 2 numbers
  // therefore calculate minimum difference and
  // initial result
  let minDistance = arr[1] - arr[0];
  let result = [[arr[0], arr[1]]];

  // start at index 2 (skipping the first two numbers)
  for (let i = 2, l = arr.length; i < l; ++i) {
    let diff = arr[i] - arr[i - 1];
    if (diff === minDistance) {
      // if the difference is equal to our minimum,
      // add the pair to our result
      result.push([arr[i - 1], arr[i]]);
    } else if (diff < minDistance) {
      // update the minimum distance
      minDistance = diff;

      // reset the result
      result = [[arr[i - 1], arr[i]]];
    }
  }

  return result;
};
