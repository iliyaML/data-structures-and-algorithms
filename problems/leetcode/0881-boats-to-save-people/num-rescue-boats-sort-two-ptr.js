/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = (people, limit) => {
  // sort the array in ascending order
  people.sort(function (a, b) {
    return a - b;
  });

  // initilize our two pointers
  let left = 0;
  let right = people.length - 1;
  let minNumOfBoats = 0;

  // loop until left meets right
  while (left <= right) {
    // calculate the remaining space after the heaviest person
    // has been included in the boat
    let remain = limit - people[right];
    // move the right pointer
    --right;
    // increment the result
    ++minNumOfBoats;

    // include the lightest person in the boat if possible
    if (left <= right && remain >= people[left]) {
      // move the left pointer
      ++left;
    }
  }

  return minNumOfBoats;
};
