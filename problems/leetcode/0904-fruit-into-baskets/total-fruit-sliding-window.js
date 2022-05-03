/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  let maxFruits = 0;

  // key: type of fruit
  // val: frequency
  let basket = new Map();

  // sliding window algorithm
  let start = 0;
  for (let end = 0, l = fruits.length; end < l; ++end) {
    // add fruit to basket
    basket.set(fruits[end], (basket.get(fruits[end]) || 0) + 1);

    // if basket has more than 2 types of fruit
    while (basket.size > 2) {
      // decrement the fruit at the start
      basket.set(fruits[start], basket.get(fruits[start]) - 1);

      // if frequency is zero, delete the fruit from the basket
      if (basket.get(fruits[start]) === 0) {
        basket.delete(fruits[start]);
      }

      // move the start pointer
      ++start;
    }

    // update max number of fruits in the basket
    // end - start + 1 = # of fruits
    maxFruits = Math.max(maxFruits, end - start + 1);
  }

  return maxFruits;
};
