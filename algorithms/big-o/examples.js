let nums = [1, 3, 4, 5, 10, 9, 8, 7, 6];

// O(1) - constant time
console.log(nums[5]);

// O(n) - linear search
for (let num of nums) {
  console.log(num);
}

// O(n^2) - nested loops
for (let i = 0, l = nums.length; i < l; ++i) {
  for (let j = i + 1; j < l; ++j) {
    console.log(nums[j]);
  }
}

// O(n log n) - built-in sort
nums.sort((a, b) => a - b);

// O(log n) - binary search
let binarySearch = (target) => {
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

console.log(binarySearch(10));

// O(2^n)
let fib = (n) => {
  // base case
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log("fib(10)", fib(10));
