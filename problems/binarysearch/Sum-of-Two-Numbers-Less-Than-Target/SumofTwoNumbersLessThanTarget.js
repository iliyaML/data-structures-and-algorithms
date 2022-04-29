class Solution {
  solve(nums, target) {
    // n log n
    nums.sort((a, b) => a - b);

    let firstPtr = 0;
    let lastPtr = nums.length - 1;
    let ans = -Infinity;

    while (firstPtr < lastPtr) {
      const sumOfNumbers = nums[firstPtr] + nums[lastPtr];
      if (sumOfNumbers < target) {
        ans = Math.max(ans, sumOfNumbers);
        console.log(ans);
        ++firstPtr;
      } else {
        --lastPtr;
      }
    }

    return ans;
  }
}
