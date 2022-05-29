/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  // key: height
  // val: frequency
  let heightMap = new Array(101).fill(0);

  // calculate the frequency of each height
  for (let height of heights) {
    ++heightMap[height];
  }

  let result = 0;
  let curHeight = 0;

  // go through each value in heights
  for (let i = 0, l = heights.length; i < l; ++i) {
    // move the curHeight pointer until we find the next smallest available height
    while (heightMap[curHeight] === 0) {
      ++curHeight;
    }

    // if curHeight pointer not equal to current value of heights
    // we increment result (not matching)
    if (curHeight !== heights[i]) {
      ++result;
    }

    // decrement the frequency
    --heightMap[curHeight];
  }

  return result;
};
