/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  let results = new Array(temperatures.length).fill(0);
  let stack = []; // pair: [temp, index]

  for (let i = 0, l = temperatures.length; i < l; ++i) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      let [stackTemperature, stackIndex] = stack.pop();
      results[stackIndex] = i - stackIndex;
    }

    stack.push([temperatures[i], i]);
  }

  return results;
};
