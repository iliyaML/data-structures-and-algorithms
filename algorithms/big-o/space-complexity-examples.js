let arr1 = [];

let n = 100;
// O(n)
for (let i = 0; i < n; ++i) {
  arr1.push(i);
}

let m = 10;

// O(m * n)
const A = [];
for (let i = 0; i < m; ++i) {
  A[i] = [];
  for (let j = 0; j < n; ++j) {
    A[i][j] = 0;
  }
}

console.log(A);

// O(n)
let items = [
  [0, 0],
  [1, 1],
  [2, 2],
];
let map = new Map(items);
console.log(map);
