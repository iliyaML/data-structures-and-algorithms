/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  // iterate through all the numbers in nums
  // and add it to the set
  // if we do have it in the set, we delete it
  const mySet = new Set();
  for (let num of nums) {
    if (mySet.has(num)) {
      mySet.delete(num);
    } else {
      mySet.add(num);
    }
  }

  // once we're here, we should be left with only 1 value in our set
  // which is the number that appears only once
  return mySet.values().next().value;
};
