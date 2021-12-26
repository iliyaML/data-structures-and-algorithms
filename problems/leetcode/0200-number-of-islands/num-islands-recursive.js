/**
 * Time Complexity: O(r*c), r = rows, c = cols
 * Space Complexity: O(r*c)
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // do some checks to ensure grid is valid, good practice
  if (grid === null) {
    return 0;
  }

  // capture grid row and col length
  const rowL = grid.length;
  const colL = grid[0].length;

  // set to store visited nodes
  const visited = new Set();

  let islandCount = 0;

  // loop through all nodes
  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      // if we have not explored a node and it is land
      // we increment our island count and do a depth first search
      if (visited.has(`${r},${c}`) === false && grid[r][c] === "1") {
        ++islandCount;
        dfs(grid, rowL, colL, r, c, visited);
      }
    }
  }

  return islandCount;
};

const dfs = (grid, rowL, colL, r, c, visited) => {
  // ensure index is valid
  if (r < 0 || r >= rowL || c < 0 || c >= colL) {
    return;
  }

  // if it's water (ie. not land) or we've already visited the node
  if (grid[r][c] !== "1" || visited.has(`${r},${c}`)) {
    return;
  }

  // otherwise, we visit the node and add it to our visited set
  visited.add(`${r},${c}`);

  // dfs all the adjacent nodes
  dfs(grid, rowL, colL, r - 1, c, visited);
  dfs(grid, rowL, colL, r + 1, c, visited);
  dfs(grid, rowL, colL, r, c - 1, visited);
  dfs(grid, rowL, colL, r, c + 1, visited);
};
