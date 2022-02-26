/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  if (grid === null) {
    return 0;
  }

  // get the rows and cols of the grid
  const rowL = grid.length;
  const colL = grid[0].length;

  // iterate through each row and col
  // to find an island
  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      // if it is an island
      // call our recursive dfs function
      if (grid[r][c] === 1) {
        return _dfs(grid, r, c, rowL, colL);
      }
    }
  }

  return 0;
};

const _dfs = (grid, r, c, rowL, colL, visited = new Set()) => {
  // check if the index is valid
  // if it is not valid, then we've reached a border
  // therefore, we return 1
  if (r < 0 || r >= rowL || c < 0 || c >= colL) {
    return 1;
  }

  // if the value on our current coordinates is water
  // we return 1
  if (grid[r][c] === 0) {
    return 1;
  }

  // if it has already been visited
  // return 0
  if (visited.has(`${r},${c}`)) {
    return 0;
  }

  // add the coordinates to our visited set
  visited.add(`${r},${c}`);

  // traverse all the neighboring nodes
  let parameter = _dfs(grid, r - 1, c, rowL, colL, visited);
  parameter += _dfs(grid, r + 1, c, rowL, colL, visited);
  parameter += _dfs(grid, r, c - 1, rowL, colL, visited);
  parameter += _dfs(grid, r, c + 1, rowL, colL, visited);

  return parameter;
};
