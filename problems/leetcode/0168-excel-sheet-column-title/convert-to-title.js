/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (columnNumber) => {
  let result = "";

  // process the number from the last digit (rightmost) to the first
  while (columnNumber > 0) {
    // deduct 1 every time to account for A being used below
    --columnNumber;

    result =
      String.fromCharCode("A".charCodeAt(0) + (columnNumber % 26)) + result;

    // update the column number, remove the last number
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
