/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

const countMatches = (items, ruleKey, ruleValue) => {
  const RULE_IDX = new Map([
    ["type", 0],
    ["color", 1],
    ["name", 2],
  ]);

  return items.reduce(
    (ans, item) => (item[RULE_IDX[ruleKey]] === ruleValue ? ans + 1 : ans),
    0
  );
};
