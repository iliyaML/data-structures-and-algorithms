/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
const selectionSort = (arr) => {
  for (let i = 0, l = arr.length; i < l - 1; ++i) {
    let min_idx = i;
    for (let j = i + 1; j < l; ++j) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    let tmp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = tmp;
  }
};

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
selectionSort(arr);
console.log(arr);
