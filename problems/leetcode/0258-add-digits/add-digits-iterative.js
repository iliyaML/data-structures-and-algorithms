/**
 * Time Complexity:
 * Space Complexity:
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  let condition = true;
  let truncatedDigit = num;

  while (truncatedDigit > 9) {
    let sum = 0;
    while (truncatedDigit > 0) {
      let lastDigit = truncatedDigit % 10;
      sum += lastDigit;
      truncatedDigit = Math.floor(truncatedDigit / 10);
    }
    truncatedDigit = sum;
    console.log(truncatedDigit);
  }

  return truncatedDigit;
};
