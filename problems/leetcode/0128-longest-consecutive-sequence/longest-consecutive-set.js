/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  // to keep track of the longest sequence
  let longest = 0;

  // convert nums to a set for fast look up
  let mySet = new Set(nums);

  // iterate through items in the set
  for (let num of mySet) {
    // check if the number is the start of the sequence
    // if it is, then do a deeper investigation
    if (mySet.has(num - 1) === false) {
      // this is the start of the sequence

      // check how long the sequence is
      let n = num + 1;
      while (mySet.has(n)) {
        ++n;
      }

      // update the longest with the longest sequence
      longest = Math.max(n - num, longest);
    }
  }

  return longest;
};
