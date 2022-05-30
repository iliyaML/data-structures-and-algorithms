/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = (coordinates) => {
  // ensured to have at least two points
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];

  // calculate changes in x and y
  let dx = x1 - x0;
  let dy = y1 - y0;

  // go through each coordinates
  for (let [x, y] of coordinates) {
    // if the slope is not consistent, we immediately know it is not straight
    if (dx * (y - y1) !== dy * (x - x1)) {
      return false;
    }
  }

  return true;
};
