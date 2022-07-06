/**
 * Time Complexity: O(n), linear search
 * Space Complexity: O(1)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  let result = letters[0];

  // go through each character (letters sorted in ascending order)
  for (let letter of letters) {
    if (letter > target) {
      // immediately return once we see a letter greater than target
      return letter;
    }
  }

  // otherwise, return the first letter
  return result;
};
