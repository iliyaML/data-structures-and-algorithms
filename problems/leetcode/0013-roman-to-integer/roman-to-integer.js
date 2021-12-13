/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  // create a map that stores roman values as keys and integers as values
  const romanToIntegerMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  // process the last element in the string
  let counter = romanToIntegerMap.get(s.charAt(s.length - 1));
  let prev = counter;

  // loop from last to first
  for (let i = s.length - 2; i >= 0; --i) {
    let num = romanToIntegerMap.get(s.charAt(i));

    if (num < prev) {
      counter -= num;
    } else {
      counter += num;
    }

    prev = num;
  }

  return counter;
};
