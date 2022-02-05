/**
 * Brute Force, Abysmal Approach
 * Time Complexity: O(n^3)
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const ans = [];
  const mySet = new Set();
  for (let i = 0, l = nums.length; i < l; ++i) {
    let num1 = nums[i];
    for (let j = i + 1; j < l; ++j) {
      let num2 = nums[j];

      let sum = num1 + num2;
      let diff = 0 - sum;

      for (let k = j + 1; k < l; ++k) {
        let num3 = nums[k];

        if (num3 === diff) {
          let curAns = [num1, num2, num3].sort(function (a, b) {
            return a - b;
          });
          let str = curAns.toString();

          if (!mySet.has(str)) {
            ans.push(curAns);
            mySet.add(str);
          }
        }
      }
    }
  }

  return ans;
};
