/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * @param {*} nums
 * @returns
 */
const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  // split the array into two halves
  const leftArr = nums.splice(0, nums.length / 2);
  return merge(mergeSort(leftArr), mergeSort(nums));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  // terminate the loop if any one of the array gets empty
  while (leftArr.length > 0 && rightArr.length > 0) {
    // pick the smaller among the smallest element of leftArr and rightArr sub arrays
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

let arr = [10, 9, 7, 8, 2, 4, 5, 6];
console.log("Original:", arr);
console.log("Sorted:", mergeSort(arr));
