/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  // initialize to 1 to handle edge case 2^0 = 1
  let powerOfTwo = 1;

  // computer the power until you get up to the value n
  while (powerOfTwo < n) {
    powerOfTwo *= 2;
  }

  // if they are equal, then it is a power of two,
  // else it is false
  return powerOfTwo === n;
};
