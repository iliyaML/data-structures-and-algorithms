/**
 * Time Complexity: O(n), m = jewels, n = stones
 * Space Complexity: O(m), set to store jewels (m)
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  // create a set to store jewels
  const jewelsSet = new Set(jewels);

  // counter for stones that are jewels
  let count = 0;

  for (let i = 0, l = stones.length; i < l; ++i) {
    let stone = stones[i];

    // is the stone a jewel? increment the count
    if (jewelsSet.has(stone)) {
      ++count;
    }
  }

  return count;
};
