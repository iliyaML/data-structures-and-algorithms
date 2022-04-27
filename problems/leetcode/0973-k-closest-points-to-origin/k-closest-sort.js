/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  // sort the points in ascending order based on the distance
  points.sort(function (a, b) {
    let [x1, y1] = a;
    let [x2, y2] = b;
    let distance1 = Math.pow(x1, 2) + Math.pow(y1, 2);
    let distance2 = Math.pow(x2, 2) + Math.pow(y2, 2);

    if (distance1 < distance2) {
      return -1;
    } else {
      return 1;
    }
  });

  // return first k elements from sorted array
  let results = [];
  for (let i = 0; i < k; ++i) {
    results.push(points[i]);
  }
  return results;
};
