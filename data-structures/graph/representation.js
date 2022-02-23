const twoDGraph = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

let rowLength = twoDGraph.length;
let colLength = twoDGraph[0].length;
for (let r = 0; r < rowLength; ++r) {
  for (let c = 0; c < colLength; ++c) {
    console.log(twoDGraph[r][c] + " ");
  }
  console.log("\n");
}
