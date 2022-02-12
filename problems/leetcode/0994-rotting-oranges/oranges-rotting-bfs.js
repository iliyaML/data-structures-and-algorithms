/**
 * Time Complexity: O(m*n)
 * Space Complexiyt: O(m*n)
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const queue = [];
  let freshOranges = 0;

  const rowL = grid.length;
  const colL = grid[0].length;

  // loop through all the cells in the grid
  for (let r = 0; r < rowL; ++r) {
    for (let c = 0; c < colL; ++c) {
      if (grid[r][c] === 2) {
        // if it's rotten, add it to our queue
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        // if it's a fresh orange, increment our count
        ++freshOranges;
      }
    }
  }

  let timeElapsed = 0;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // check if fresh oranges count is greater than zero
  while (queue.length > 0 && freshOranges > 0) {
    // go through all the rotten oranges in this level
    for (let i = 0, l = queue.length; i < l; ++i) {
      const [r, c] = queue.shift();

      // go through all 4 directions
      for (let [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;

        // if the indexes are not valid or it's not a fresh orange
        // we skip them
        if (
          row < 0 ||
          row >= rowL ||
          col < 0 ||
          col >= colL ||
          grid[row][col] !== 1
        ) {
          continue;
        }

        // at this point, grid[row][col] is valid and has a fresh orange

        // change it to rotten
        grid[row][col] = 2;

        // add it to our queue (for the next level)
        queue.push([row, col]);

        // decrement the count of our orange
        --freshOranges;
      }
    }

    // once we've traversed a level, we increment the time
    ++timeElapsed;
  }

  return freshOranges > 0 ? -1 : timeElapsed;
};
