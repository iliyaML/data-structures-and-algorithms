/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  // simple check to ensure grid is valid
  if (grid === null) {
    return 0;
  }

  const rowL = grid.length;
  const colL = grid[0].length;
  const visited = new Set();

  let islandCount = 0;

  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      if (visited.has(`${r},${c}`) === false && grid[r][c] === "1") {
        ++islandCount;
        dfs(grid, rowL, colL, r, c, visited);
      }
    }
  }

  return islandCount;
};

const dfs = (grid, rowL, colL, r, c, visited) => {
  const stack = [`${r},${c}`];
  visited.add(`${r},${c}`);

  while (stack.length > 0) {
    const node = stack.pop();
    const curRow = node.split(",")[0] * 1;
    const curCol = node.split(",")[1] * 1;

    if (
      isValidIndex(rowL, colL, curRow - 1, curCol) &&
      grid[curRow - 1][curCol] === "1" &&
      visited.has(`${curRow - 1},${curCol}`) === false
    ) {
      visited.add(`${curRow - 1},${curCol}`);
      stack.push(`${curRow - 1},${curCol}`);
    }
    if (
      isValidIndex(rowL, colL, curRow + 1, curCol) &&
      grid[curRow + 1][curCol] === "1" &&
      visited.has(`${curRow + 1},${curCol}`) === false
    ) {
      visited.add(`${curRow + 1},${curCol}`);
      stack.push(`${curRow + 1},${curCol}`);
    }
    if (
      isValidIndex(rowL, colL, curRow, curCol - 1) &&
      grid[curRow][curCol - 1] === "1" &&
      visited.has(`${curRow},${curCol - 1}`) === false
    ) {
      visited.add(`${curRow},${curCol - 1}`);
      stack.push(`${curRow},${curCol - 1}`);
    }
    if (
      isValidIndex(rowL, colL, curRow, curCol + 1) &&
      grid[curRow][curCol + 1] === "1" &&
      visited.has(`${curRow},${curCol + 1}`) === false
    ) {
      visited.add(`${curRow},${curCol + 1}`);
      stack.push(`${curRow},${curCol + 1}`);
    }
  }
};

const isValidIndex = (rowL, colL, r, c) => {
  return !(r < 0 || r >= rowL || c < 0 || c >= colL);
};
