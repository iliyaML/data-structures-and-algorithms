/**
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
  // base case to check if grid is valid
  if (grid === null) {
    return;
  }

  // m = row length, n = col length
  const m = grid.length;
  const n = grid[0].length;

  // helper methods
  const _posToVal = (row, col) => {
    return row * n + col;
  };

  const _valToPos = (v) => {
    return [Math.floor(v / n), v % n];
  };

  // populate the result grid with zeroes
  let result = [];
  for (let r = 0; r < m; ++r) {
    let row = [];
    for (let c = 0; c < n; ++c) {
      row.push(0);
    }
    result.push(row);
  }

  for (let r = 0; r < m; ++r) {
    for (let c = 0; c < n; ++c) {
      let newVal = (_posToVal(r, c) + k) % (m * n);
      let [newR, newC] = _valToPos(newVal);
      result[newR][newC] = grid[r][c];
    }
  }

  return result;
};
