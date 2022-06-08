/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  // creating a new array and returning it's length
  return items.filter((item) => {
    return (
      (ruleKey === "type" && ruleValue === item[0]) ||
      (ruleKey === "color" && ruleValue === item[1]) ||
      (ruleKey === "name" && ruleValue === item[2])
    );
  }).length;
};
