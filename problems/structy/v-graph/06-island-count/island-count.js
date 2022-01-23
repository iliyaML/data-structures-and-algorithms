const islandCount = (grid) => {
  const rowL = grid.length;
  const colL = grid[0].length;
  const visited = new Set();

  let count = 0;

  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      let tile = grid[r][c];

      if (tile === "L" && visited.has(`${r},${c}`) === false) {
        ++count;
        dfs(grid, r, c, visited);
        console.log(visited);
      }
    }
  }

  return count;
};

const dfs = (grid, r, c, visited) => {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) {
    return;
  }

  if (visited.has(`${r},${c}`) || grid[r][c] !== "L") {
    return;
  }

  visited.add(`${r},${c}`);
  // console.log(visited);

  dfs(grid, r - 1, c, visited);
  dfs(grid, r + 1, c, visited);
  dfs(grid, r, c - 1, visited);
  dfs(grid, r, c + 1, visited);
};
