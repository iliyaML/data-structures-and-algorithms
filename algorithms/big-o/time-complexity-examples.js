// n = # of elements in nums1
let nums1 = [1, 3, 4, 5, 10, 9, 8, 7, 6];
// m = # of elements in nums2
let nums2 = [4, 3, 1, 2, 6];

let map = new Map([
  [0, 0],
  [1, 1],
  [2, 2],
]);

// O(1) - constant time
console.log(nums1[5]);
console.log(map.get(0));

// O(n) - linear search
for (let num of nums1) {
  console.log(num);
}

// O(m + n)
for (let num of nums2) {
  console.log(num);
}

for (let num of nums1) {
  console.log(num);
}

// O(n^2) - nested loops
for (let i = 0, n = nums1.length; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    console.log(nums1[j]);
  }
}

// O(m * n)
for (let i = 0, m = nums2.length; i < m; ++i) {
  for (let j = 0, n = nums1.length; j < n; ++j) {
    console.log(nums2[i] + nums1[j]);
  }
}

// O(n log n) - built-in sort
nums1.sort((a, b) => a - b);

// O(log n) - binary search
let binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch(nums1, 10));

// O(2^n)
let fib = (n) => {
  // base case
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log("fib(10)", fib(10));
