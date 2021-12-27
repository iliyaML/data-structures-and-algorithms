const partition = (arr, leftIndex, rightIndex) => {
  let pivot = arr[Math.floor((rightIndex + leftIndex) / 2)]; // use middle element as pivot element
  while (leftIndex <= rightIndex) {
    while (arr[leftIndex] < pivot) {
      ++leftIndex;
    }
    while (arr[rightIndex] > pivot) {
      --rightIndex;
    }
    if (leftIndex <= rightIndex) {
      // swap the two elements
      let tmp = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = tmp;

      // move the pointers
      ++leftIndex;
      --rightIndex;
    }
  }

  // return the left pointer
  return leftIndex;
};

// Divide and Conquer
// Time Complexity: O(n log n)
// Space Complexity: O(log n)
const quickSort = (arr, leftIndex = 0, rightIndex = arr.length - 1) => {
  // if array only has 1 element, it means it's already sorted
  // if left and right pointers are out of order, means the array is already sorted
  if (leftIndex >= rightIndex) {
    return;
  }

  let index = partition(arr, leftIndex, rightIndex); // index returned from partition
  quickSort(arr, leftIndex, index - 1);
  quickSort(arr, index, rightIndex);
};

let items = [5, 3, 7, 6, 2, 9];
quickSort(items);
console.log(items); // prints [2,3,5,6,7,9]
