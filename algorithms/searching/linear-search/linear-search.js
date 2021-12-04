// Time Complexity: O(n), size of the input
const linearSearch = (arr, target) => {
  for (let i = 0, l = arr.length; i < l; ++i) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};
