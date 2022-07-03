/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
  let availablePlots = 0;

  // handle edge case
  let countZeroes = 1;

  // go through each plots in the the flowerbed
  for (let i = 0, l = flowerbed.length; i < l; ++i) {
    if (flowerbed[i] === 0) {
      // increment our counter if we see a plot that is available
      ++countZeroes;
    } else {
      // if we see a flower
      // update available plots
      availablePlots += Math.floor((countZeroes - 1) / 2);

      // reset our counter
      countZeroes = 0;
    }
  }

  if (countZeroes !== 0) {
    // edge case
    // if there is a flower in the last plot, we update our available plots as below
    availablePlots += Math.floor(countZeroes / 2);
  }

  return availablePlots >= n;
};
