/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = (arr, k) => {
  // simple base case to check before we do more work
  if (arr.length < k) {
    return "";
  }

  // key: word
  // val: frequency
  const myMap = new Map();
  for (let i = 0, l = arr.length; i < l; ++i) {
    myMap.set(arr[i], myMap.has(arr[i]) ? myMap.get(arr[i]) + 1 : 1);
  }

  // base case before we do more work
  if (myMap.size < k) {
    return "";
  }

  // loop through all items in the map
  for (let [key, val] of myMap) {
    // decrement k if we found a distinct string
    if (val === 1) {
      --k;
    }

    // return once we've reached zero
    if (k == 0) {
      return key;
    }
  }

  return "";
};
