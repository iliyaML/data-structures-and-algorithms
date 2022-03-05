/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  // array to store our position
  let position = [0, 0];
  // map to store
  // key: directions
  // val: values to change
  let myMap = new Map([
    ["U", [0, 1]],
    ["D", [0, -1]],
    ["L", [-1, 0]],
    ["R", [1, 0]],
  ]);

  // loop through all the character in string moves
  for (let i = 0, l = moves.length; i < l; ++i) {
    // update our position variables
    let [x, y] = myMap.get(moves[i]);
    position[0] += x;
    position[1] += y;
  }

  // check to see if both x and y positions are equal to zero
  return position[0] === 0 && position[1] === 0;
};
