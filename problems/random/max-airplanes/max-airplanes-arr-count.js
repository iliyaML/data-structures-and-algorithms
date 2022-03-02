/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {*} list
 * @returns
 */
const maxAirplanesInAir = (list) => {
  // initialize an array of 24 elements (24 hrs)
  const myArr = new Array(24).fill(0);

  for (let [start, end] of list) {
    ++myArr[start];
    --myArr[end];
  }

  let sum = 0;
  let maxNoOfPlanes = 0;
  for (let val of myArr) {
    sum += val;
    maxNoOfPlanes = Math.max(maxNoOfPlanes, sum);
  }

  return maxNoOfPlanes;
};

console.log(
  maxAirplanesInAir([
    [2, 5],
    [3, 7],
    [8, 9],
  ])
); // 2
