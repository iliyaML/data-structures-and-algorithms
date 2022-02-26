/**
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n)
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  // basic check to ensure image is valid
  if (image === null) {
    return image;
  }

  // get the total number of rows and cols
  const rowL = image.length;
  const colL = image[0].length;

  // save the value of the original color
  const originalColor = image[sr][sc];

  // call dfs on our starting point
  _dfs(image, sr, sc, rowL, colL, originalColor, newColor);

  return image;
};

const _dfs = (
  image,
  r,
  c,
  rowL,
  colL,
  originalColor,
  newColor,
  visited = new Set()
) => {
  // check if index is valid
  // return otherwise
  if (
    r < 0 ||
    r >= rowL ||
    c < 0 ||
    c >= colL ||
    image[r][c] !== originalColor
  ) {
    return;
  }

  // if it is not in our visited set and the color matches original color
  if (!visited.has(`${r},${c}`) && image[r][c] === originalColor) {
    image[r][c] = newColor;

    visited.add(`${r},${c}`);

    // move through all adjacent nodes
    _dfs(image, r + 1, c, rowL, colL, originalColor, newColor, visited);
    _dfs(image, r - 1, c, rowL, colL, originalColor, newColor, visited);
    _dfs(image, r, c + 1, rowL, colL, originalColor, newColor, visited);
    _dfs(image, r, c - 1, rowL, colL, originalColor, newColor, visited);
  }
};
