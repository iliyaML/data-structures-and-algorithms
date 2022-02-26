/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
  let maxArea = 0;
  // basic check to ensure grid is valid
  if (grid === null) {
    return maxArea;
  }

  // determine the number of rows and cols
  const rowL = grid.length;
  const colL = grid[0].length;

  // iterate through all
  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      // if we encounter a land
      // we call our recursive dfs function
      if (grid[r][c] === 1) {
        // update the max area if it's greater than what we already have
        maxArea = Math.max(maxArea, _dfs(grid, r, c, rowL, colL));
      }
    }
  }

  // if we encounter no land, max area will remain as zero
  // otherwise, it will be the largest area returned from dfs
  return maxArea;
};

const _dfs = (grid, r, c, rowL, colL, visited = new Set()) => {
  // ensure the r and c indexes are valid
  // we have not visited it yet
  // and it is a land
  if (
    r >= 0 &&
    r < rowL &&
    c >= 0 &&
    c < colL &&
    !visited.has(`${r},${c}`) &&
    grid[r][c] === 1
  ) {
    // add it to our visited set
    visited.add(`${r},${c}`);

    // set this to 1 to take into account the current land we're at
    let area = 1;

    // call this function recursively on all 4 of its neighbors
    area += _dfs(grid, r + 1, c, rowL, colL, visited);
    area += _dfs(grid, r - 1, c, rowL, colL, visited);
    area += _dfs(grid, r, c + 1, rowL, colL, visited);
    area += _dfs(grid, r, c - 1, rowL, colL, visited);

    return area;
  }

  // otherwise we return 0
  return 0;
};
